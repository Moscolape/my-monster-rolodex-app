import './card.styles.css';

const Card = ({monster}) => {
    const {username, id, email} = monster;

    return (
        <div className="card-container" key={id}>
            <img alt={`monster ${username}`} src={`https://robohash.org/${id}?set=set2&size=150x150`}/>
            <h2>{username}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;