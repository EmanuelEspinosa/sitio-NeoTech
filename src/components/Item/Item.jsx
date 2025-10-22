import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ id, name, price, brand, imageUrl, category, feature }) => {
    return (
        <article className="cardProduct">
            <div className="product-img">
                <img src={imageUrl} alt={name} />
            </div>

            <div className="product-info">
                <h2 className="product-name">{name}</h2>
                <p className="brand">{brand}</p>
                <p className="category">{category}</p>

                {feature && <p className="feature">{feature.slice(0, 100)}...</p>}

                <div className="price-tag">${price.toLocaleString()}</div>

                <Link to={`/detail/${id}`} className="detail-button">Ver más</Link>
            </div>
        </article>
    );
};