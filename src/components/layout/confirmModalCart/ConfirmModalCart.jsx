import "./ConfirmModalCart.css"

export const ConfirmModalCart = ({ onConfirm, onCancel, message }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                {message ? (<p>{message}</p>) : (
                    <>
                        <p>¿Deseas agregar este producto al carrito?</p>
                        <div className="modal-buttons">
                            <button onClick={onConfirm} className="confirm-btn">
                                Confirmar
                            </button>
                            <button onClick={onCancel} className="cancel-btn">
                                Cancelar
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};