import './Rating.css'
import starGrey from '../../assets/star-grey.svg'
import starRed from '../../assets/star-red.svg'

const Rating = ({ rating }) => {
    const maxRating = 5 

    const getStarImage = (index) => {
        if (index < rating) {
            return starRed 
        }
        return starGrey 
    }

    return (
        <ul className="rating-ul">
            {Array.from({ length: maxRating }, (_, index) => (
                <li key={index}>
                    <img src={getStarImage(index)} alt="Star" />
                </li>
            ))}
        </ul>
    )
}

export default Rating
