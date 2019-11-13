import React, { Component } from 'react';
import ExchangedCurrency from './components/CurrencyConverter';
import './App.css';

class App extends Component {
  render() {
    return (
      <fragment>
        <h2>High Order Component</h2>
        <ExchangedCurrency/>
      </fragment>
    );
  }
}

export default App;
