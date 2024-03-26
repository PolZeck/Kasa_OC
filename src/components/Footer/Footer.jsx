import logo from '../../assets/logo-white.svg'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="" className="kasa-logo-white" />
            <p className="copyright">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer

