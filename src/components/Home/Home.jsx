import { useEffect, useState } from "react";
import { SliderContainer } from "../../layout/Slider/SliderContainer/SliderContainer";
import { getProducts } from "../../services/products";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { fieldsByCategory } from "../../../public/data/fieldsByCategory";
import { calculateDiscountPrice } from "../../utils/calculateDiscountPrice";
import { ConfirmModalCart } from "../../layout/confirmModalCart/ConfirmModalCart";

const imagenesPorCategoria = {
    Celulares: "/images/imagenesCateg/celulares.jpg",
    Impresoras: "/images/imagenesCateg/impresoras.jpg",
    Auriculares: "/images/imagenesCateg/auriculares.jpg",
    Smartwatch: "/images/imagenesCateg/smartwatch.jpg",
    Notebook: "/images/imagenesCateg/notebook.jpg",
    Tablets: "/images/imagenesCateg/tablets.jpg",
    Monitores: "/images/imagenesCateg/monitores.jpg",
    Proyectores: "/images/imagenesCateg/proyector.jpg",
    PCs: "/images/imagenesCateg/pc.jpg"
};

export const Home = () => {
    const [destacados, setDestacados] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const slides = [
        (
            <div className="item slider_content-item1"></div>
        ),
        (
            <div className="item slider_content-item2"></div>
        ),
        (
            <div className="item slider_content-item3"></div>
        ),
    ];

    useEffect(() => {
        getProducts()
            .then((data) => {
                const topRated = data.filter(p => p.valoracion === 5).slice(0, 5);
                setDestacados(topRated);
            })
    }, []);

    const categorias = Object.keys(imagenesPorCategoria);

    const handleSubscribe = () => {
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
            setEmail("");
        }, 3000);
    }

    return (
        <div className="container-page">
            <SliderContainer slides={slides} />
            <section className="productos-destacados">
                <h2>Nuestos productos destacados</h2>
                <div className="cards-destacados">
                    {destacados.map(p => {
                        const { newPrice, descuento } = calculateDiscountPrice(p.price, p.category);

                        return (
                            <div key={p.id} className="card-destacado">
                                <div className="img-cardDestacados">
                                    <img src={p.imageUrl} alt={p.name} />
                                </div>
                                <div className="content-cardDestacados">
                                    <h3>{p.name}</h3>

                                    <div className="section-precio price-container">
                                        <div className="section-priceReal price-sinDesc">
                                            <div className="price-old">
                                                ${p.price.toLocaleString()}
                                            </div>
                                            <div className="porcent-desc porcent-off">{descuento}% Off</div>
                                        </div>
                                        <div className="section-priceDesc section-salePrice">
                                            <div className="sale-price">
                                                ${newPrice.toLocaleString()}
                                            </div>
                                        </div>
                                    </div>

                                    <button onClick={() => navigate(`/products/detail/${p.id}`)}>Ver detalle</button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button className="btn-todosProduct-Home" onClick={() => navigate("/products")}>Ver todos los productos</button>
            </section>

            <section className="categorias-destacadas">
                <h2>Algunas de nuestras principales categorías</h2>
                <div className="categoria-cards">
                    {categorias.map((cat) => (
                        <Link to={`/products/category/${cat}`} key={cat} className="categoria-card-link">
                            <div className="categoria-card">
                                <div className="img-category-card">
                                    <img src={imagenesPorCategoria[cat]} alt={cat} />
                                </div>
                                <h3>{cat}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="banner-promos">
                <div className="banner-card-promo">
                    <div className="section1-promo">
                        <div>
                            <h3>HASTA</h3>
                            <h3><span>20%</span> OFF</h3>
                        </div>
                        <h4 className="cuotas">HASTA <span>12</span> CUOTAS SIN INTERES</h4>
                    </div>

                    <div className="section2-promo">
                        <h3>Notebooks</h3>
                        <div>
                            <img src={imagenesPorCategoria["Notebook"]} />
                        </div>
                    </div>
                </div>

                <div className="banner-card-promo">
                    <div className="section1-promo">
                        <div>
                            <h3>HASTA</h3>
                            <h3><span>10%</span> OFF</h3>
                        </div>
                        <h4 className="cuotas">HASTA <span>6</span> CUOTAS SIN INTERES</h4>
                    </div>

                    <div className="section2-promo">
                        <h3>Auriculares</h3>
                        <div>
                            <img src={imagenesPorCategoria["Auriculares"]} />
                        </div>

                    </div>
                </div>

                <div className="banner-card-promo">
                    <div className="section1-promo">
                        <div>
                            <h3>HASTA</h3>
                            <h3><span>15%</span> OFF</h3>
                        </div>
                        <h4 className="cuotas">HASTA <span>12</span> CUOTAS SIN INTERES</h4>
                    </div>

                    <div className="section2-promo">
                        <h3>Celulares</h3>
                        <div>
                            <img src={imagenesPorCategoria["Celulares"]} />
                        </div>

                    </div>
                </div>


            </section>

            <section className="section-newsletter">
                <h2>Conéctese con lo mejor del momento</h2>
                <p>Únase a nuestro newsletter y disfrute de descuentos exclusivos,
                    lanzamientos destacados y recomendaciones que marcan tendencia.
                    Sea parte de nuestra comunidad y manténgase siempre al día.
                </p>
                <div className="input-newsletter">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleSubscribe();
                    }}>
                        <input
                            type="email"
                            placeholder="Ingrese su email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-email"
                            required
                        />
                        <button type="submit" className="btn-newsletter">Suscribirse</button>
                    </form>
                </div>
            </section>

            {showModal && (
                <ConfirmModalCart
                    message={`Email ${email} suscripto a nuestro newsletter`}
                />
            )}
        </div >




    )
}