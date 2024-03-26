import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import Data from '../../datas/about.json'
import bannerImage from '../../assets/banner-about.jpg'
import './About.css'

const About = () => {
    return (
        <>
            <header className="about-header">
                <Banner image={bannerImage} />
            </header>
            <main className="about-main">
                {Data.map((item) => (
                    <Collapse
                        key={item.id}
                        title={item.title}
                        content={item.description}
                    />
                ))}
            </main>
        </>
    )
}
export default About
