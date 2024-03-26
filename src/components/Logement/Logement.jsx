import { useState, useEffect } from 'react'
import Card from '../Card/Card.jsx'
import Carrousel from '../Carrousel/Carrousel.jsx'
import Tag from '../Tag/Tag.jsx'
import Rating from '../Rating/Rating.jsx'
import Collapse from '../Collapse/Collapse.jsx'
import AuthorCard from '../AuthorCard/AuthorCard.jsx'
import Data from '../../datas/datas.json'
import './Logement.css'


const Logement = ({ id, mode }) => {
    const [selectedData, setSelectedData] = useState(null)

    useEffect(() => {
        const data = Data.find((item) => item.id === id)
        setSelectedData(data)
    }, [id])

    if (!selectedData) {
        return null
    }

    if (mode === 'card') {
        return <Card id={id} cover={selectedData.cover} title={selectedData.title} />
    } else if (mode === 'detail') {
        return (
            <>
                <header className="detail-header">
                    <div className="carrousel-container">
                        <Carrousel pictures={selectedData.pictures} />
                    </div>
                </header>
                <main className="detail-main">
                    <section className="info-container">
                        <div className="title-container">
                            <h1>{selectedData.title}</h1>
                            <h2>{selectedData.location}</h2>
                            <div className="tag-container">
                                <Tag tags={selectedData.tags} />
                            </div>
                        </div>
                        <div className="rating-author-container">
                            <div className="author-card-container">
                                <AuthorCard
                                    key={`${selectedData.id}-name`}
                                    picture={selectedData.host.picture}
                                    name={selectedData.host.name}
                                />
                            </div>

                            <div className="rating-container">
                                <Rating rating={selectedData.rating} />
                            </div>
                        </div>
                    </section>
                    <div className="detail-collapse-container">
                        <Collapse
                            key={`${selectedData.id}-description`}
                            title="Description"
                            content={selectedData.description}
                        />
                        <Collapse
                            key={`${selectedData.id}-equipments`}
                            title="Équipements"
                            content={
                                <ul>
                                    {selectedData.equipments.map(
                                        (equipment, index) => (
                                            <li
                                                key={`${selectedData.id}-equipment-${index}`}
                                            >
                                                {equipment}
                                            </li>
                                        )
                                    )}
                                </ul>
                            }
                        />
                    </div>
                </main>
            </>
        )
    }
}

export default Logement
