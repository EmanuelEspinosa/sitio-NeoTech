import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Header.css"
import { useState } from "react";
import { useCartContext } from "../../context/CartContext/useCartContext";


export const Header = () => {
    const [menuMovil, SetMenuMovil] = useState(false);
    const { getTotalItems } = useCartContext();

    return (
        <header>
            <Link to={"/"}>
                <section className="logo_header">
                    <img src="/images/logo-alternativo.png" alt="Logo comercio" />
                    <p>NeoTech</p>
                </section>
            </Link>

            <div className="header-navar">
                <div className="navegation-header">
                    <nav className={menuMovil ? "navbar active" : "navbar"}>
                        <ul className="nav-ul">
                            <li>
                                <Link
                                    className="nav-item"
                                    to={"/"}
                                    onClick={menuMovil ? () => SetMenuMovil(!menuMovil) : ""}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="nav-item"
                                    to={"/aboutUs"}
                                    onClick={menuMovil ? () => SetMenuMovil(!menuMovil) : ""}>
                                    Sobre Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="nav-item"
                                    to={"/products"}
                                    onClick={menuMovil ? () => SetMenuMovil(!menuMovil) : ""}>
                                    Productos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="nav-item"
                                    to={"/contact"}
                                    onClick={menuMovil ? () => SetMenuMovil(!menuMovil) : ""}>
                                    Contacto
                                </Link>
                            </li>

                        </ul>
                    </nav>

                    <Link className="item-cart" to={"/cart"}><FontAwesomeIcon className="icono-cart" icon={faCartShopping} />
                        {getTotalItems() > 0 && (
                            <span className="in-cart">{getTotalItems()}</span>
                        )}
                    </Link>
                </div>

                <span className="iconMenuMovil" onClick={() => SetMenuMovil(!menuMovil)}>
                    {
                        menuMovil ? (
                            <FontAwesomeIcon icon={faTimes} size="2x" />
                        ) : (
                            <FontAwesomeIcon icon={faBars} size="2x" />
                        )
                    }
                </span>
            </div>
        </header>
    );
}