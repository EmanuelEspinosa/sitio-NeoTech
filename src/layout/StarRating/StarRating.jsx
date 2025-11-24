import "./StarRating.css";

export const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);        // cantidad de estrellas completas
    const hasHalfStar = rating % 1 !== 0;        // si hay media estrella
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="star-rating">
            <p className="rating"><strong>{rating}</strong></p>
            {Array(fullStars).fill().map((_, i) => (
                <span key={`full-${i}`} className="star full">★</span>
            ))}
            {hasHalfStar && <span className="star half">☆</span>}
            {Array(emptyStars).fill().map((_, i) => (
                <span key={`empty-${i}`} className="star empty">☆</span>
            ))}
        </div>
    );
};