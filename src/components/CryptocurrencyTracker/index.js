import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {cryptocurrenciesData: [], isLoading: true}

  componentDidMount() {
    this.getcurrencyItemsData()
  }

  getcurrencyItemsData = async () => {
    const response = await fetch(
      `https://apis.ccbp.in/crypto-currency-converter`,
    )
    const data = await response.json()
    this.setState({
      cryptocurrenciesData: data.map(eachItem => ({
        id: eachItem.id,
        currencyLogoUrl: eachItem.currency_logo,
        currencyName: eachItem.currency_name,
        usdValue: eachItem.usd_value,
        euroValue: eachItem.euro_value,
      })),
      isLoading: false,
    })
  }

  LoadRender = () => (
    <div testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  rendercyrptoCurrencyLists = () => {
    const {cryptocurrenciesData} = this.state
    return <CryptocurrenciesList cryptocurrenciesData={cryptocurrenciesData} />
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? this.LoadRender() : this.rendercyrptoCurrencyLists()}
      </div>
    )
  }
}
export default CryptocurrencyTracker
