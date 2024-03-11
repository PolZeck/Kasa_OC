import BannerImg from '../../assets/Banner.jpg'
import './index.css'


function Banner() {
    return (
        <div className='banner-container'>
            <h1>Chez vous, partout et ailleurs</h1>
            <img src={BannerImg} alt="Falaise en bord de mer" />
        </div>
    )
}
export default Banner
