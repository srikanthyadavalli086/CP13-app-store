import './index.css'

const TabItem = props => {
  const {tabDetails, updateAppsOnPage} = props
  const {displayText, tabId} = tabDetails

  const onClickTab = () => {
    updateAppsOnPage(tabId)
  }

  return (
    <li className="tab-li">
      <button onClick={onClickTab} type="button" className="button">
        <p>{displayText}</p>
      </button>
    </li>
  )
}
export default TabItem
