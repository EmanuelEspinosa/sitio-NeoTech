import { Navigate, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { useState } from "react";
import { ConfirmModalCart } from "../confirmModalCart/ConfirmModalCart";
import "./AdminLayout.css";


export const AdminLayout = () => {
    const [showModal, setShowModal] = useState(false);
    const { logout, user } = useAuthContext();
    const navigate = useNavigate();


    const handleLogout = () => {
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
            logout();
        }, 3000);
    };

    return (
        <section className="admin-layout">
            {user && (
                <button onClick={handleLogout} className="btn-logout">
                    Cerrar sesión
                </button>
            )}
            <Outlet />

            {showModal && (
                <ConfirmModalCart message={"Cerrando Sesión..."}/>
            )}
            
        </section>
    )
}