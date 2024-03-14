import './Card.css'
const Card = ({ cover, title }) => {
    return (
        <li className="card">
            <div className="image-container">
                <img src={cover} alt="" />
            </div>
            <div className="title-container">
                <h2>{title}</h2>
            </div>
        </li>
    )
}

export default Card
