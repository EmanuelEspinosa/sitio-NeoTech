import "./AboutUs.css";

export const AboutUs = () => {

    return (
        <>
            <h1 className="title-aboutUs">Institucional</h1>
            <div className="aboutUs-container">
                <section>
                    <div className="item imagen">
                        <img src="/images/Fachada-NeoTech.png" />
                    </div>

                    <div className="item texto">
                        <h2>Tecnología pensada para acompañarte</h2>
                        <p><b>
                            En NeoTech no solo ofrecemos productos tecnológicos: buscamos que cada
                            persona pueda acceder a ellos de manera simple y confiable.
                            Creemos que el futuro se construye con herramientas al alcance
                            de todos, por eso trabajamos con calidad, precios transparentes
                            y un servicio cercano que genera confianza. La tecnología no es
                            un privilegio, es una oportunidad para crecer, aprender y
                            disfrutar.</b>
                        </p>
                    </div>
                </section>

                <section>
                    <div className="item texto">
                        <h2>Nuestra misión: acercar innovación con propósito</h2>
                        <p className="parrafo-valores"><b>
                            En NeoTech trabajamos para que la tecnología se convierta en
                            una aliada cotidiana, capaz de simplificar tareas,
                            inspirar creatividad y abrir nuevas oportunidades.
                            Queremos que cada persona encuentre en nuestros productos
                            no solo calidad y accesibilidad, sino también un camino
                            hacia un futuro más conectado y humano.</b>
                        </p>
                        <h2>Cercanía, confianza y transparencia</h2>
                        <p><b>
                            Nos mueve la idea de construir relaciones duraderas con nuestros
                            clientes. Valoramos la honestidad en cada interacción,
                            la claridad en cada compra y la cercanía de un servicio que
                            escucha y responde. Porque más allá de vender tecnología,
                            buscamos generar confianza.</b>
                        </p>
                    </div>

                    <div className="item imagen img2">
                        <img src="/images/interior-tienda-NeoTech.png" />
                    </div>
                </section>

                <section>
                    <div className="item imagen">
                        <img src="/images/interior-tienda-NeoTech-clientes.png" />
                    </div>

                    <div className="item texto">
                        <h2>Compromiso con el cliente</h2>
                        <p className="parrafo-valores"><b>
                            Cada producto que ofrecemos está pensado para que disfrutes
                            de tranquilidad y seguridad. Nos comprometemos a acompañarte
                            antes, durante y después de tu compra, brindando asesoramiento
                            y soporte personalizado. Queremos que tu experiencia sea
                            simple, clara y satisfactoria.</b>
                        </p>
                        <h2>Innovación para crecer juntos</h2>
                        <p><b>
                            Miramos hacia adelante con la convicción de que la tecnología
                            es una oportunidad para aprender, crear y transformar.
                            En NeoTech trabajamos día a día para ofrecerte soluciones
                            modernas que te conecten con el futuro, sin perder la esencia
                            de un trato humano y cercano.</b>
                        </p>
                    </div>
                </section>

            </div>
            <div className="aboutUs-Servis">
                <h2>También ofrecemos</h2>
                <div className="aboutUs-Servis-container">
                    <section className="aboutUs-servis-section">
                        <div className="img-servis">
                            <img src="/images/atencionPersonalizada.png" />
                        </div>
                        <h4>Atención personalizada</h4>
                        <p>
                            Nuestro equipo está disponible para asesorarte y acompañarte en
                            cada paso, brindando respuestas claras y soluciones a
                            medida en relación a los productos que busques.
                        </p>
                    </section>

                    <section className="aboutUs-servis-section">
                        <div className="img-servis">
                            <img src="/images/pagoSeguro.png" />
                        </div>
                        <h4>Pago seguro</h4>
                        <p>
                            Tu tranquilidad es lo primero. Todas tus compras están
                            protegidas con métodos de pago confiables y certificados,
                            para que disfrutes de una experiencia segura en cada
                            transacción.
                        </p>
                    </section>

                    <section className="aboutUs-servis-section">
                        <div className="img-servis">
                            <img src="/images/envioRapido.png" />
                        </div>
                        <h4>Envíos rápidos</h4>
                        <p>
                            Sabemos que el tiempo importa. Por eso trabajamos con
                            servicios de logística eficientes que garantizan entregas
                            ágiles y puntuales, para que recibas tus productos sin demoras.
                        </p>
                    </section>
                </div>

            </div>
        </>
    )
}