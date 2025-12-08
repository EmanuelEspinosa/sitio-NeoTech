import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./QuestionsAnswers.css";
import { useState } from "react";

const faqs = [
    {
        pregunta: "¿Cuál es el horario de atención?",
        respuesta: "Atendemos de lunes a viernes de 9 a 18 hs."
    },
    {
        pregunta: "¿Puedo pagar en cuotas?",
        respuesta: "Desde la ficha del producto podés verificar si existe la opción de pagar en cuotas y con qué medios. Al momento de la compra, antes de confirmar el pago, podrás definir la cantidad de cuotas y conocer el monto de cada una."
    },
    {
        pregunta: "¿Hacen envíos a todo el país?",
        respuesta: "Sí, realizamos envíos a todas las provincias de Argentina."
    },
    {
        pregunta: "¿Qué métodos de pago aceptan?",
        respuesta: "Ofrecemos múltiples formas de pago: tarjetas de crédito, débito, transferencias y opciones adicionales según la región. Para conocer todas las alternativas, visitá la sección de pagos en nuestro sitio."
    },
    {
        pregunta: "¿Cómo realizar cambios y devoluciones?",
        respuesta: "Las gestiones de cambios o devoluciones se realizan directamente desde Mercado Libre. Podés hacerlo tanto en la computadora como en la aplicación, ingresando a la sección Mis Compras. Allí seleccionás el producto y elegís la opción Devolver el producto. Se generará una etiqueta de envío que deberás imprimir y colocar en el paquete para llevarlo al correo. Con ese paso, el trámite queda completo."
    },
    {
        pregunta: "¿Ofrecen garantia en los productos?",
        respuesta: "Todos nuestros productos cuentan con garantía oficial del fabricante. El plazo y condiciones varían según cada producto."
    }
];

const QuestionsAnswers = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <div className="contact-faq">
            <h3>Preguntas frecuentes</h3>
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <button className="faq-question" onClick={() => toggleFAQ(index)}>
                        {faq.pregunta}
                        {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    {openIndex === index && (
                        <div className="faq-answer">
                            <p>{faq.respuesta}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default QuestionsAnswers;