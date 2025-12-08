import { useState } from "react";
import "./Contact.css";
import { ConfirmModalCart } from "../confirmModalCart/ConfirmModalCart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faPhone, faEnvelope, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import QuestionsAnswers from "../QuestionsAnswers/QuestionsAnswers";

const initialForm = {
    nombre: "",
    apellido: "",
    dni: "",
    telefono: "",
    email: "",
    localidad: "",
    motivo: "",
    sucursal: "",
    mensaje: ""
}

export const Contact = () => {
    const [formData, setFormData] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.nombre.trim()) newErrors.nombre = "⚠️ El nombre es obligatorio";
        if (!formData.apellido.trim()) newErrors.apellido = "⚠️ El apellido es obligatorio";

        if (!formData.dni.trim()) {
            newErrors.dni = "⚠️ El DNI es obligatorio";
        } else if (!/^\d{7,8}$/.test(formData.dni)) {
            newErrors.dni = "⚠️ El DNI debe tener entre 7 y 8 dígitos numéricos";
        }
        if (!formData.telefono.trim()) {
            newErrors.telefono = "⚠️ El teléfono es obligatorio";
        } else if (!/^\+?\d{8,15}$/.test(formData.telefono)) {
            newErrors.telefono = "⚠️ El teléfono debe ser válido (8 a 15 dígitos)";
        }

        if (!formData.email.includes("@")) newErrors.email = "⚠️ Email inválido. Falta símbolo '@'";
        if (!formData.localidad.trim()) newErrors.localidad = "⚠️ La localidad es obligatoria";

        if (!formData.motivo) newErrors.motivo = "⚠️ Debe seleccionar un motivo de consulta";
        if (!formData.sucursal.trim()) newErrors.sucursal = "⚠️ La sucursal es obligatoria";
        if (!formData.mensaje.trim()) newErrors.mensaje = "⚠️ El mensaje es obligatorio";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setShowModal(true);
        setTimeout(() => {
            setFormData(initialForm);
            setErrors({});
            setShowModal(false);
        }, 3000);
    }

    const handleReset = () => {
        setFormData(initialForm);
        setErrors({});
    };

    

    



    return (
        <>
            <h1 className="contacto-title">Contacto</h1>
            <section className="section-contacto">

                <div className="form-contacto-container">
                    <form onSubmit={handleSubmit} className="form-contacto">
                        <fieldset>
                            <legend>Datos personales</legend>
                            <input
                                type="text"
                                name="nombre"
                                placeholder="Nombre..."
                                value={formData.nombre}
                                onChange={handleChange}
                                className="form-control input-item"
                            />
                            {errors.nombre && <p className="error-envio">{errors.nombre}</p>}

                            <input
                                type="text"
                                name="apellido"
                                placeholder="Apellido..."
                                value={formData.apellido}
                                onChange={handleChange}
                                className="form-control input-item"
                            />
                            {errors.apellido && <p className="error-envio">{errors.apellido}</p>}

                            <input
                                type="number"
                                name="dni"
                                placeholder="DNI"
                                value={formData.dni}
                                onChange={handleChange}
                                className="form-control input-item"
                            />
                            {errors.dni && <p className="error-envio">{errors.dni}</p>}

                            <input
                                type="number"
                                name="telefono"
                                placeholder="Telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                                className="form-control input-item"
                            />
                            {errors.telefono && <p className="error-envio">{errors.telefono}</p>}

                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control input-item"
                            />
                            {errors.email && <p className="error-envio input-item">{errors.email}</p>}

                            <input
                                type="text"
                                name="localidad"
                                placeholder="Localidad..."
                                value={formData.localidad}
                                onChange={handleChange}
                                className="form-control input-item"
                            />
                            {errors.localidad && <p className="error-envio">{errors.localidad}</p>}
                        </fieldset>

                        <fieldset>
                            <legend>Consulta</legend>
                            <select name="motivo" value={formData.motivo} onChange={handleChange} className="form-control input-item" required>
                                <option value="">Seleccione un motivo</option>
                                <option value="compra_online">Consulta por compra Online</option>
                                <option value="compra_sucursal">Consulta por compra en nuestras sucursales</option>
                                <option value="creditos">Consultar sobre créditos NeoTech</option>
                                <option value="estado_pedido">Conocer el estado de mi pedido</option>
                                <option value="problemas_pago">Problemas con mi compra / pago</option>
                                <option value="reclamos_envio">Reclamos por entregas / envíos</option>
                                <option value="fallas">Reclamo por fallas</option>
                                <option value="otros">Otras consultas</option>
                            </select>
                            {errors.motivo && <p className="error-envio">{errors.motivo}</p>}

                            <select name="sucursal" value={formData.sucursal} onChange={handleChange} className="form-control input-item" required>
                                <option value="">Seleccione una sucursal</option>
                                <option value="caballito">Caballito (CABA)</option>
                                <option value="belgrano">Belgrano (CABA)</option>
                                <option value="barracas">Barracas (CABA)</option>
                                <option value="quilmes">Quilmes (GBA)</option>
                                <option value="san_isidro">San Isidro (GBA)</option>
                                <option value="ramos_mejia">Ramos Mejía (GBA)</option>
                            </select>
                            {errors.sucursal && <p className="error-envio">{errors.sucursal}</p>}

                            <textarea
                                name="mensaje"
                                placeholder="Tu mensaje..."
                                value={formData.mensaje}
                                onChange={handleChange}
                                className="form-control input-item"
                            />
                            {errors.mensaje && <p className="error-envio">{errors.mensaje}</p>}
                        </fieldset>
                        <div className="actions-form">
                            <button type="button" className="btn-limpiar" onClick={handleReset}>Limpiar</button>
                            <button type="submit" className="btn-enviar">Enviar</button>
                        </div>
                    </form>
                </div>

                <div className="contacto-info">
                    <div className="info-sucursal-central">
                        <h3>Nuestra ubicación</h3>
                        <div className="sucur-mapa">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.3489323787234!2d-58.4367664849357!3d-34.617003980454915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb6f7e4c84a3%3A0xfed3ea3aa34625f4!2sAv.%20Rivadavia%204500%2C%20C1407%20CABA!5e0!3m2!1ses!2sar!4v1694303889022!5m2!1ses!2sar"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <div className="section-info-suc">
                            <div><FontAwesomeIcon icon={faMap} /> Av.Rivadavia 4500 - Ciudad de Buenos Aires</div>
                            <div><FontAwesomeIcon icon={faPhone} /> (+54) 11 - 4250-0111</div>
                            <div><FontAwesomeIcon icon={faEnvelope} /> informacion@neotech.org.ar</div>
                            <div><FontAwesomeIcon icon={faClock} /> Lunes a Viernes: 8:30 a 19:30hs y Sábados: 8:30 a 12:30hs</div>

                        </div>
                    </div>
                    <div className="info-sucursales">
                        <div className="sucursal-lista">
                            <h4>Sucursales en CABA</h4>
                            <div className="sucursal">
                                <div className="ubication-icon"><FontAwesomeIcon icon={faLocationDot} /></div>
                                <div className="ubication-info-sucursal">
                                    <h4>Central - Caballito</h4>
                                    <p>Av. Rivadavia 4500</p>
                                </div>
                            </div>
                            <div className="sucursal">
                                <div className="ubication-icon"><FontAwesomeIcon icon={faLocationDot} /></div>
                                <div className="ubication-info-sucursal">
                                    <h4>Norte - Belgrano</h4>
                                    <p>Av. Cabildo 2300</p>
                                </div>

                            </div>
                            <div className="sucursal">
                                <div className="ubication-icon"><FontAwesomeIcon icon={faLocationDot} /></div>
                                <div className="ubication-info-sucursal">
                                    <h4>Sur - Barracas</h4>
                                    <p>Av. Montes de Oca 700</p>
                                </div>

                            </div>
                        </div>
                        <div className="sucursal-lista">

                            <h4>Sucursales en GBA</h4>
                            <div className="sucursal">
                                <div className="ubication-icon"><FontAwesomeIcon icon={faLocationDot} /></div>
                                <div className="ubication-info-sucursal">
                                    <h4>Sur - Quilmes</h4>
                                    <p>Av. Hipólito Yrigoyen 500</p>
                                </div>
                            </div>
                            <div className="sucursal">
                                <div className="ubication-icon"><FontAwesomeIcon icon={faLocationDot} /></div>
                                <div className="ubication-info-sucursal">
                                    <h4>Norte - San Isidro</h4>
                                    <p>Av. Santa Fé 700</p>
                                </div>

                            </div>
                            <div className="sucursal">
                                <div className="ubication-icon"><FontAwesomeIcon icon={faLocationDot} /></div>
                                <div className="ubication-info-sucursal">
                                    <h4>Oeste - Ramos Mejía</h4>
                                    <p>Av. de Mayo 1100</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>


                {showModal && (
                    <ConfirmModalCart
                        message={"Mensaje enviado. A la brevedad nos pondremos en contacto con usted"} />
                )}
            </section>

            <QuestionsAnswers />

        </>

    )
}

