import Banner from '../../components/Banner/Banner'
import bannerImage from '../../assets/banner-about.webp'
import Collapse from '../../components/Collapse/Collapse'
import Data from '../../datas/about.json'
import './About.css'

const About = () => {
    return (
        <>
            <header className="about-header">
                <div className="about-banner-container">
                    <Banner image={bannerImage} />
                </div>
            </header>
            <main className="about-main">
                <ul className="about-collapse-container">
                    {Data.map((item) => (
                        <Collapse
                            key={item.id}
                            title={item.title}
                            content={item.description}
                        />
                    ))}
                </ul>
            </main>
        </>
    )
}

export default About
