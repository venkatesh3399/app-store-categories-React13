import './index.css'

const TabItem = props => {
  const {tabDetails, changeActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const updateTabId = () => {
    changeActiveTabId(tabId)
  }
  const activeTab = isActive ? 'act-tab-btn' : ''
  return (
    <li>
      <button
        type="button"
        className={`button ${activeTab}`}
        onClick={updateTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
