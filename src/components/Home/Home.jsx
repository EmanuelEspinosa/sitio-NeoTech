import { useEffect, useState } from "react";
import { SliderContainer } from "../../layout/Slider/SliderContainer/SliderContainer";
import { getProducts } from "../../services/products";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { fieldsByCategory } from "../../../public/data/fieldsByCategory";
import { calculateDiscountPrice } from "../../utils/calculateDiscountPrice";

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

                                    <button onClick={() => navigate(`/detail/${p.id}`)}>Ver detalle</button>
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

            <section className="nuestras-sucursales">
                <h2>Nuestras Sucursales</h2>

                <div className="sucursales-container">
                    <div className="container-lista">
                        <div className="sucursal-lista">
                            <h4>Sedes en CABA</h4>
                            <div className="sucursal">
                                <h4>📍 Sede Central - Caballito</h4>
                                <p>Av. Rivadavia 4500</p>
                            </div>
                            <div className="sucursal">
                                <h4>📍 Sede Norte - Belgrano</h4>
                                <p>Av. Cabildo 2300</p>
                            </div>
                            <div className="sucursal">
                                <h4>📍 Sede Sur - Barracas</h4>
                                <p>Av. Montes de Oca 700</p>
                            </div>
                        </div>
                        <div className="sucursal-lista">
                            <h4>Sedes en Gran Buenos Aires</h4>
                            <div className="sucursal">
                                <h4>📍 Sede Sur - Quilmes</h4>
                                <p>Av. Hipólito Yrigoyen 500</p>
                            </div>
                            <div className="sucursal">
                                <h4>📍 Sede Norte - San Isidro</h4>
                                <p>Av. Santa Fé 700</p>
                            </div>
                            <div className="sucursal">
                                <h4>📍 Sede Oeste - Ramos Mejía</h4>
                                <p>Av. de Mayo 1100</p>
                            </div>
                        </div>
                    </div>


                    <div className="sucursales-mapa">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.3489323787234!2d-58.4367664849357!3d-34.617003980454915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb6f7e4c84a3%3A0xfed3ea3aa34625f4!2sAv.%20Rivadavia%204500%2C%20C1407%20CABA!5e0!3m2!1ses!2sar!4v1694303889022!5m2!1ses!2sar"



                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section >
        </div >

    )
}