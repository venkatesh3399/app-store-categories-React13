import './index.css'

const AppItem = props => {
  const {itemDetails} = props
  const {imageUrl, appName} = itemDetails
  return (
    <li className="app-item">
      <img className="image" src={imageUrl} alt={appName} />
      <p className="para">{appName}</p>
    </li>
  )
}

export default AppItem
