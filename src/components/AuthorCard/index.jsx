import './AuthorCard.css'

const AuthorCard = ({ picture, name }) => {
    return (
      <figure>
        <img src={picture} alt="Author" />
        <figcaption>{name}</figcaption>
      </figure>
    );
  };
  
  export default AuthorCard;
