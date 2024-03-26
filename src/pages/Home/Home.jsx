import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import jsonData from '../../datas/datas.json'
import bannerImage from '../../assets/banner-home.webp'
import './Home.css'

const Home = () => {
    return (
        <>
            <header className='home-header'>
                <div className="home-banner-container">
                    <Banner
                        title={
                            <>
                                <span>Chez vous,</span>{' '}
                                <span>partout et ailleurs</span>
                            </>
                        }
                        image={bannerImage}
                    />
                </div>
            </header>
            <main className='home-main'>
                <div className="gallery">
                    <ul>
                        {jsonData.map((item) => (
                            <Card
                                key={item.id}
                                id={item.id}
                                cover={item.cover}
                                title={item.title}
                            />
                        ))}
                    </ul>
                </div>
            </main>
        </>
    )
}

export default Home
