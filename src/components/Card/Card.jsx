import { useNavigate } from 'react-router-dom'
import './Card.css'

const Card = ({ data }) => {
    const navigate = useNavigate()

    const handleImageClick = () => {
        if (data.id) {
            navigate(`/Detail/${data.id}`)
        } else {
            navigate('*')
        }
    }

    return (
        <li className="card" onClick={handleImageClick}>
            <div className="card-image-container">
                <img src={data.cover} alt="" />
            </div>
            <div className="card-title-container">
                <h2>{data.title}</h2>
            </div>
        </li>
    )
}

export default Card
