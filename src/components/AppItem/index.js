import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {imageUrl, appName} = appDetails
  return (
    <li className="app-li">
      <img src={imageUrl} alt={appName} className="app-li-image" />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
