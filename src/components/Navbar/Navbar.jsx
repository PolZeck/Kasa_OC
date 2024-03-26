import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo-red.svg'
import './Navbar.css'

const Navbar = () => {
    const location = useLocation()
    return (
        <nav>
            <img src={logo} alt="" className="kasa-logo-red" />

            <ul>
                <li>
                    <Link
                        to="/"
                        className={location.pathname === '/' ? 'active' : ''}
                    >
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className={
                            location.pathname === '/about' ? 'active' : ''
                        }
                    >
                        A propos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
