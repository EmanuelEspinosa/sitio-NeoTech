import { useState } from "react";
import { ProductFormContainer } from "../../../components/adminComponents/ProductFormContainer/ProductFormContainer";
import { AdminProductsList } from "../AdminProductsList/AdminProductsList";
import "./AdminDashboard.css";


export const AdminDashboard = () => {
  const [option, setOption] = useState("");

  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Panel de administración</h1>

      <select value={option} onChange={(e) => setOption(e.target.value)} className="option-dashboard">
        <option value="">-- Selecciona una opción --</option>
        <option value="create">Cargar nuevo producto</option>
        <option value="delete">Eliminar producto</option>
      </select>

      {option === "create" && <ProductFormContainer />}
      {option === "delete" && <AdminProductsList />}
    </div>
  );
};