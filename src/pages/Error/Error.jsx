import { Link } from 'react-router-dom'
import './Error.css'

const Error = () => {
    return (
        <main className="error-main">
            <h1 className="error-title">404</h1>
            <p className="error-txt">
                <span>Oups! La page que</span>{' '}
                <span>vous demandez n'existe pas</span>
            </p>
            <Link to="/" className="error-redirection">
                Retournez sur la page d'accueil
            </Link>
        </main>
    )
}

export default Error
