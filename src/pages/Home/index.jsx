import Banner from '../../components/Banner'
import bannerImage from '../../assets/banner-home.jpg'
import CardContainer from '../../components/CardContainer'

const Home = () => {
    return (
        <>
            <Banner
                title="Chez vous, partout et ailleurs"
                image={bannerImage}
            />
            <CardContainer />
        </>
    )
}

export default Home
