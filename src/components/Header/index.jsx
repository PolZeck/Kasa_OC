import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import './index.css'

function Header() {
    return (
        <nav>
            <div className="kasa-logo-letters">
                {'K'}
                <img
                    src={Logo}
                    alt="logo en forme de maison"
                    className="kasa-logo"
                />
                {'sa'}
            </div>
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

export default Header
