import Card from './logementCard/Card.jsx';
import LogementDetail from './logementDetail/logementDetail.jsx'; // Import de la nouvelle composante


const Logement = ({ data, mode }) => {
    if (mode === 'card') {
        return <Card data={data} />;
    } else if (mode === 'detail') {
        return <LogementDetail data={data} />;
    }
};

export default Logement;