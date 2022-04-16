import './index.css'

const CryptocurrencyItem = props => {
  const {currencyItemDetails} = props
  const {
    currencyLogoUrl,
    currencyName,
    usdValue,
    euroValue,
  } = currencyItemDetails
  return (
    <li className="item">
      <div className="item-container">
        <img
          src={currencyLogoUrl}
          alt={currencyName}
          className="currency-logo"
        />
        <p className="currency-name"> {currencyName}</p>
      </div>
      <div className="usd-and-euro-container">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
