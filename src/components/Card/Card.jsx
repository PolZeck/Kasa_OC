import { useNavigate } from 'react-router-dom'
import './Card.css'

const Card = ({ id, cover, title }) => {
    const navigate = useNavigate()

    const handleImageClick = () => {
        if (id) {
            navigate(`/Detail/${id}`)
        } else {
            navigate('*')
        }
    }

    return (
        <li className="card" onClick={handleImageClick}>
            <div className="card-image-container">
                <img src={cover} alt="" />
            </div>
            <div className="card-title-container">
                <h2>{title}</h2>
            </div>
        </li>
    )
}

export default Card
