import { useState } from "react"
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { ConfirmModalCart } from "../../layout/confirmModalCart/ConfirmModalCart";
import "./Login.css";

export const Login = () => {
    const [userForm, setUserForm] = useState({ name: "", password: "" });
    const { user, login } = useAuthContext();
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    if (user) {
        return <Navigate to="/admin/alta-productos" />
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserForm({ ...userForm, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = login(userForm.name, userForm.password);

        if (success) {
            navigate("/admin/alta-productos");
        } else {
            setUserForm({ name: "", password: "" });
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);
            }, 3000);
        }
    }

    return (
        <div className="form-container">
            <section className="form-container-section">
                <img className="img-form" src="/images/logo-alternativo.png" alt="logo" />
                <form onSubmit={handleSubmit} className="form-admin">
                    <div className="form-section-input">
                        <input
                            type="text"
                            name="name"
                            value={userForm.name}
                            onChange={handleChange}
                            placeholder="Usuario"
                            className="form-input"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            value={userForm.password}
                            onChange={handleChange}
                            placeholder="Constraseña"
                            className="form-input"
                        />
                    </div>
                    <button type="submit" className="btn-login-admin">Iniciar Sesión</button>
                </form>
            </section>


            {showModal && (
                <ConfirmModalCart message={"Credenciales incorrectas❗"} />
            )}
        </div>
    )
}