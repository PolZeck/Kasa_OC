import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Data from '../../datas/datas.json'
import Logement from '../../components/Logement/Logement.jsx'
import Error from '../Error/Error.jsx'
import './Detail.css'

const Detail = () => {
    const { id } = useParams(); // Récupère l'ID depuis les paramètres de l'URL
    const navigate = useNavigate(); // Utilise la fonction navigate() du router
    const selectedData = Data.find((item) => item.id === id); // Recherche de l'élément correspondant dans le tableau Data

    

    if (!selectedData) {
        return (
            <Error/>
            ); // Renvoie null si les données ne sont pas encore disponibles
    }

    return (
        <Logement id={id} mode='detail' data={selectedData} />
    )
}

export default Detail