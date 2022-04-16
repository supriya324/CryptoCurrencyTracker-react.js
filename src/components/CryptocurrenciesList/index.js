import {Component} from 'react'

import './index.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  getHeadingCryptoHeader = () => (
    <div className="list-header">
      <p className="list-coin-type-heading"> Coin Type </p>
      <div className="usd-and-euro-container">
        <p className="usd-heading"> USD</p>
        <p className="euro-heading"> EURO</p>
      </div>
    </div>
  )

  getcurrencyviewData = () => {
    const {cryptocurrenciesData} = this.props

    return (
      <div className="currency-container">
        {this.getHeadingCryptoHeader()}
        <ul className="list-currency-container">
          {cryptocurrenciesData.map(eachItem => (
            <CryptocurrencyItem
              key={eachItem.id}
              currencyItemDetails={eachItem}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cryptoCurrency-container">
        <h1 className="crypto-heading"> Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          className="crypto-image"
          alt="cryptocurrency"
        />
        {this.getcurrencyviewData()}
      </div>
    )
  }
}
export default CryptocurrenciesList
