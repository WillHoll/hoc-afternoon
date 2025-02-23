import React, { Component } from 'react';
import CurrencyDisplay from './CurrencyDisplay';

const withCurrency = (BaseComponent) => (
  class Currency extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currencyChosen: false,
        selectedCurrency: 'Select Currency',
        amount: 0
      }
    }

    handleAmountIncrease = () => {
      this.setState((prevState) => {
        return {
          amount: (prevState.amount += 1)
        }
      })
    }

    handleAmountDecrease = () => {
      this.setState((prevState) => {
        return {
          amount: (prevState.amount -= 1)
        }
      })
    }

    handleOptionSelect = (userVal) => {
      this.setState(() => {
        return {
          selectedCurrency: userVal,
          currencyChosen: userVal === 'Select Currency' ? false : true
        }
      })
    }

    render() {
      const currencyData = [
        { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
        { name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
        { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
        { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
        { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
      ]
      const currencyOptions = currencyData.map((el, i) => (
        <option key={i} value={i}>{el.name}</option>
      ))
      return (
        <div>
          <select onChange={e => this.handleOptionSelect(e.target.value)}>
            <option value='Select Currency'>Select Currency</option>
            {currencyOptions}
          </select>
          <div>
            <button className='add' onClick={() => this.handleAmountIncrease()}>+</button>
            <button className='subtract' onClick={() => this.handleAmountDecrease()}>-</button>
          </div>
          {this.state.currencyChosen
          ?
            (<BaseComponent
              currency={currencyData[this.state.selectedCurrency]}
              amount={this.state.amount}
            />)
            :
            (<p>Please Select Currency</p>)
          }
        </div>
      );
    }
  }
)

const ExchangedCurrency = withCurrency(CurrencyDisplay)

export default ExchangedCurrency;