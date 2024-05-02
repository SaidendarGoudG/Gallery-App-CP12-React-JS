import './index.css'

const ThumbnailItem = props => {
  const {eachImage, isActive, updateImage} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachImage
  const thumbnailClassName = isActive ? 'thumbnail' : 'thumbnail-image'

  const onClickThumbnail = () => {
    updateImage(id)
  }

  return (
    <li>
      <button
        className="thumbnail-btn"
        type="button"
        onClick={onClickThumbnail}
      >
        <img
          className={thumbnailClassName}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
