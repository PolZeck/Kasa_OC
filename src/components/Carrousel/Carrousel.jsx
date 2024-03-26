import './Carrousel.css'
import chevronPrev from '../../assets/chevron-carrousel.svg'
import chevronNext from '../../assets/chevron-carrousel.svg'
import { useState } from 'react'

const Carrousel = ({ pictures }) => {
    const [pictureIndex, setPictureIndex] = useState(0)

    const prev = () => {
        if (pictureIndex === 0) {
            setPictureIndex(pictures.length - 1)
        } else setPictureIndex(pictureIndex - 1)
    }
    const next = () => {
        if (pictureIndex === pictures.length - 1) {
            setPictureIndex(0)
        } else setPictureIndex(pictureIndex + 1)
    }
    const showChevronAndCounter = pictures.length > 1

    return (
        <>
            <img
                src={pictures[pictureIndex]}
                alt=""
                className="carrousel-image"
            />
            {showChevronAndCounter && (
                <>
                    <img
                        src={chevronPrev}
                        alt=""
                        className="chevron-prev"
                        onClick={prev}
                    />
                    <img
                        src={chevronNext}
                        alt=""
                        className="chevron-next"
                        onClick={next}
                    />
                    <div className="counter">
                        {`${pictureIndex + 1}/${pictures.length}`}
                    </div>
                </>
            )}
        </>
    )
}

export default Carrousel
