import './AuthorCard.css'

const AuthorCard = ({ picture, name }) => {
    const fullName = name.split(' ')

    const firstName = fullName[0]
    const lastName = fullName[1]

    return (
        <figure className="author-card">
            <img src={picture} alt="Author" />
            <figcaption>
                <div>{firstName}</div>
                <div>{lastName}</div>
            </figcaption>
        </figure>
    )
}

export default AuthorCard
