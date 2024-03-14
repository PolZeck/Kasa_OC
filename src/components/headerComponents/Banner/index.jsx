import './Banner.css'

const Banner = ({ image, title }) => {
    return (
        <header className="banner-container">
            <h1>{title}</h1>
            <img src={image} alt="Banner" className="banner-img" />
        </header>
    )
}
export default Banner
