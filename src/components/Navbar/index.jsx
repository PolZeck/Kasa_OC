import { Link } from 'react-router-dom'
import Logo from '../../assets/logo-rouge.png'
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <img
                src={Logo}
                alt="logo en forme de maison"
                className="kasa-logo-rouge"
            />

            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/about">Á propos</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
