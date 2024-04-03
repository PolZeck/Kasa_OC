import Banner from '../../components/Banner/Banner'
import jsonData from '../../datas/datas.json'
import bannerImage from '../../assets/banner-home.webp'
import './Home.css'
import Logement from '../../components/Logement/Logement'

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
                        {jsonData.map((item) => {
                            return <Logement 
                                mode='card'
                                key={item.id}
                                data={item}
                            /> 
                        })}
                    </ul>
                </div>
            </main>
        </>
    )
}

export default Home
