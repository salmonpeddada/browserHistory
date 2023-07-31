import './index.css'

const HistoryProfile = props => {
  const {historyProfile, onDeleteHistory} = props
  const {id, timeAccessed, title, domainUrl, logoUrl} = historyProfile

  const onDelete = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="history-profile-container">
      <p className="time">{timeAccessed}</p>
      <div className="history-profile-website">
        <img className="web-img" src={logoUrl} alt="domain logo" />
        <p className="web-head">{title}</p>
        <p className="web-para">{domainUrl}</p>
      </div>
      <button className="del-img-container" type="submit" data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="del-img"
          onClick={onDelete}
          data-testid="delete"
        />
      </button>
    </li>
  )
}

export default HistoryProfile
