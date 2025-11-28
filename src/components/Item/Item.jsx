import { Link } from "react-router-dom";
import "./Item.css";
import { calculateDiscountPrice } from "../../utils/calculateDiscountPrice";

export const Item = ({ id, name, price, brand, imageUrl, category, feature }) => {

    const { newPrice, descuento } = calculateDiscountPrice(price, category);

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

                <div className="section-precio">
                    <div className="section-priceReal">
                        <div className="price-old">
                            ${price.toLocaleString()}
                        </div>
                        <div className="porcent-desc">{descuento}% Off</div>
                    </div>
                    <div className="section-priceDesc">
                        <div className="price-tag">
                            ${newPrice.toLocaleString()}
                        </div> 
                    </div>
                </div>

                <Link to={`/products/detail/${id}`} className="detail-button">Ver más</Link>
            </div>
        </article>
    );
};