import './CardGallery.css'
import Card from '../Card'
import jsonData from '../../../datas/datas.json'

const CardGallery = () => {
    return (
        <main className="card-gallery">
            <ul>
                {jsonData.map((item) => (
                    <Card key={item.id} cover={item.cover} title={item.title} />
                ))}
            </ul>
        </main>
    )
}
export default CardGallery
