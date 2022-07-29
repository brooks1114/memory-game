
import './SingleCard.css'

export default function SingleCard(props) {

    return (
        <div className="card">
            <div>
                <img className="front" src={props.card.src} alt="card front" />
                <img className="back" src="/img/cover.png" alt="card back" />
            </div>
        </div>
    )
}