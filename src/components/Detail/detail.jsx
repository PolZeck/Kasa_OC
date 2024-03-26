import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Data from '../../datas/datas.json'
import Carrousel from '../../components/Carrousel/Carrousel.jsx'
import Tag from '../../components/Tag/Tag.jsx'
import Rating from '../../components/Rating/Rating.jsx'
import Collapse from '../../components/Collapse/Collapse.jsx'
import AuthorCard from '../../components/AuthorCard/AuthorCard.jsx'
import './Housing.css'

const Housing = () => {
    
    const { id } = useParams(); // Récupère l'ID depuis les paramètres de l'URL
    const navigate = useNavigate(); // Utilise la fonction navigate() du router
    const [selectedData, setSelectedData] = useState(null); // Initialise une variable d'état pour les données sélectionnées

    useEffect(() => {
        // Recherche de l'élément correspondant dans le tableau Data
        const data = Data.find((item) => item.id === id);

        // Vérification si l'élément est trouvé ou non
        if (!data) {
            // Redirection vers la page d'erreur si l'élément n'est pas trouvé
            navigate('*');
        } else {
            setSelectedData(data); // Met à jour les données sélectionnées dans l'état
        }
    }, [id, navigate]);

    if (!selectedData) {
        return null; // Renvoie null si les données ne sont pas encore disponibles
    }

    return (
        <>
            <header className="housing-header">
                <div className="carrousel-container">
                    <Carrousel pictures={selectedData.pictures} />
                </div>
            </header>
            <main className="housing-main">
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
                <div className="housing-collapse-container">
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

export default Detail
