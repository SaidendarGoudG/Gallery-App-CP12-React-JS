import './index.css'

const ThumbnailItem = props => {
  const {eachImage, updateImage} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachImage

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
          className="thumbnail-image"
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
