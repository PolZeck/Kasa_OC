import './Banner.css'

const Banner = ({ image, title }) => {
    return (
        <>
            {title && <h1 className="banner-title">{title}</h1>}
            <img src={image} alt="" className="banner-img" />
        </>
    )
}
export default Banner
