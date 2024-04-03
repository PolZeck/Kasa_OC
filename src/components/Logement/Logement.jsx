import Card from '../Card/Card.jsx'
import Carrousel from '../Carrousel/Carrousel.jsx'
import Tag from '../Tag/Tag.jsx'
import Rating from '../Rating/Rating.jsx'
import Collapse from '../Collapse/Collapse.jsx'
import AuthorCard from '../AuthorCard/AuthorCard.jsx'

import './Logement.css'


const Logement = ({ data, mode }) => {

    if (mode === 'card') {
        return <Card data={data} />
    } else if (mode === 'detail') {
        return (
            <>
                <header className="detail-header">
                    <div className="carrousel-container">
                        <Carrousel pictures={data.pictures} />
                    </div>
                </header>
                <main className="detail-main">
                    <section className="info-container">
                        <div className="title-container">
                            <h1>{data.title}</h1>
                            <h2>{data.location}</h2>
                            <div className="tag-container">
                                <Tag tags={data.tags} />
                            </div>
                        </div>
                        <div className="rating-author-container">
                            <div className="author-card-container">
                                <AuthorCard
                                    key={`${data.id}-name`}
                                    picture={data.host.picture}
                                    name={data.host.name}
                                />
                            </div>

                            <div className="rating-container">
                                <Rating rating={data.rating} />
                            </div>
                        </div>
                    </section>
                    <div className="detail-collapse-container">
                        <Collapse
                            key={`${data.id}-description`}
                            title="Description"
                            content={data.description}
                        />
                        <Collapse
                            key={`${data.id}-equipments`}
                            title="Équipements"
                            content={
                                <ul>
                                    {data.equipments.map(
                                        (equipment, index) => (
                                            <li
                                                key={`${data.id}-equipment-${index}`}
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
