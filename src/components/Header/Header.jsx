import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Header.css"
import { useState } from "react";


export const Header = () => {
    const [menuMovil, SetMenuMovil] = useState(false);

    return (
        <header>
            <Link to={"/"}>
                <section className="logo_header">
                    <img src="/images/galaxy-a56.png" alt="Logo comercio" />
                    <p>Mi Tienda</p>
                </section>
            </Link>

            <nav className={menuMovil ? "navbar active" : "navbar"}>
                <ul className="nav-ul">
                    <li><Link className="nav-item" to={"/"}>Home</Link></li>
                    <li><Link className="nav-item" to={"/sobreNosotros"}>Sobre Nosotros</Link></li>
                    <li><Link className="nav-item" to={"/contact"}>Contacto</Link></li>
                </ul>
            </nav>

            <span className="iconMenuMovil" onClick={() => SetMenuMovil(!menuMovil)}>
                {
                    menuMovil ? (
                        <FontAwesomeIcon icon={faTimes} size="2x" />
                    ) : (
                        <FontAwesomeIcon icon={faBars} size="2x" />
                    )
                }
            </span>


        </header>
    );
}