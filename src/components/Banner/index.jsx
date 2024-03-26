import './Banner.css'

const Banner = ({ image, title }) => {
    return (
        <>
            <h1 className='banner-title'>{title}</h1>
            <img src={image} alt="Banner" className="banner-img" />
        </>
    )
}
export default Banner
