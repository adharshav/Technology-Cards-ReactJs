import './index.css'

const Card = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} card-container`}>
      <h1 className="designation">{title}</h1>
      <p className="description">{description}</p>
      <div className="image-container">
        <img src={imgUrl} alt={title} className="image" />
      </div>
    </li>
  )
}

export default Card
