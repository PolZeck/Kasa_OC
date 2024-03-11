import './Banner.css'

const Banner = ({ image, title }) => {
    return (
        <div className="banner-container">
            <h1>{title}</h1>
            <img src={image} alt="Banner" className="banner-img" />
        </div>
    )
}
export default Banner
