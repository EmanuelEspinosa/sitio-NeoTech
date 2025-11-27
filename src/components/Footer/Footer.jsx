import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "./Footer.css"
import { Link, useLocation, useNavigate } from 'react-router-dom'


export const Footer = () => {
    return (
        <footer>
            <section class="footer-secciones">
                <div class="footer_card footer_section1">
                    <div class="section1-logo">
                        <img src="/images/logo-alternativo.png" alt="Logo comercio" />
                        <h3>NeoTech</h3>
                    </div>

                    <div class="datos_footer-section1">
                        <div><FontAwesomeIcon icon={faMap} />Av.Rivadavia 4500 - CABA</div>
                        <div><FontAwesomeIcon icon={faPhone} />54 11 - 4250-0111</div>
                        <div><FontAwesomeIcon icon={faEnvelope} />informacion@neotech.org.ar</div>

                    </div>
                </div>

                <div class="footer_card footer_section2">
                    <div>
                        <h3>Links de interes</h3>
                        <ul>
                            <li><Link className="item-section2" to={"/"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link></li>
                            <li><Link className="item-section2" to={"/sobreNosotros"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Sobre Nosotros</Link></li>
                            <li><Link className='item-section2' to={"/products"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} >Productos</Link></li>
                            <li><Link className="item-section2" to={"/contact"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Contacto</Link></li>
                            <li><Link className="item-section2" to={"/cart"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Mi Carrito</Link></li>
                        </ul>
                    </div>
                </div>

                <div class="footer_card footer_section3">
                    <h3>Horario de Atención</h3>
                    <p><strong>Lunes a Viernes:</strong> 8:30 a 19:30hs</p>
                    <p><strong>Sábados:</strong> 8:30 a 12:30hs</p>
                    <p class="footer-info">Contamos con atención personalizada para ayudarte a encontrar el producto ideal para vos.</p>
                    <div class="iconos_redes">
                        <a class="footer-icono" href="https://www.facebook.com" target="_blank">
                            <img src="/images/RedesSociales/Facebook.png" alt="" /> </a>
                        <a class="footer-icono" href="https://www.instagram.com" target="_blank">
                            <img src="/images/RedesSociales/Instagram.png" alt="" /> </a>
                        <a class="footer-icono" href="https://www.twitter.com" target="_blank">
                            <img src="/images/RedesSociales/Twitter-nuevo.png" alt="" /> </a>
                        <a class="footer-icono" href="https://www.linkedin.com" target="_blank">
                            <img src="/images/RedesSociales/Linkedin.png" alt="" /> </a>
                        <a class="footer-icono" href="https://www.youtube.com" target="_blank">
                            <img src="/images/RedesSociales/YouTube.png" alt="" /> </a>
                    </div>
                </div>
            </section>

            <div class="derechos">
                <p>Copyright 2025. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}