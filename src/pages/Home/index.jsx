import Banner from '../../components/headerComponents/Banner'
import CardGallery from '../../components/mainComponents/CardGallery'
import bannerImage from '../../assets/banner-home.jpg'

const Home = () => {
    return (
        <>
            <Banner
                title="Chez vous, partout et ailleurs"
                image={bannerImage}
            />
            <CardGallery />
        </>
    )
}

export default Home
