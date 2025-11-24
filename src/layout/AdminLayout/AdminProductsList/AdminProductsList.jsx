import { useEffect, useState } from "react";
import { deleteProduct, getProducts } from "../../../services/products";
import "./AdminProductsList.css";
import { ConfirmModalCart } from "../../confirmModalCart/ConfirmModalCart";


export const AdminProductsList = () => {
    const [products, setProducts] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState("");


    useEffect(() => {
        getProducts()
            .then((data) => {
                setProducts(data);
            })
            .catch(console.error);
    }, []);

    const handleDelete = (id) => {
        setSelectedId(id);
        setShowModal(true);
    }

    const handleDeleteConfirm = async () => {
        try {
            const confirm = await deleteProduct(selectedId); //retorna bool
            if (confirm) {
                setMessage("Producto eliminado con éxito");
                setProducts(products.filter(p => p.id !== selectedId));
            }
            else {
                setMessage("Error al eliminar el producto");
            }

            setTimeout(() => {
                setShowModal(false);
                setMessage("");
                setSelectedId(null);
            }, 3000);

        } catch (error) {
            console.error(error);
            alert("No se pudo eliminar el producto");
        }
    };

    const handleCancel = () => {
        setSelectedId(null);
        setShowModal(false);
        setMessage("");
    }

    return (
        <>
            <div className="admin-products-container">
                <h3 className="admin-products-title">Listado de productos</h3>
                <ul className="ulList-product">
                    {products.map(p => (
                        <li key={p.id} className="itemList-product">
                            <img src={p.imageUrl} className="image-product" />
                            <p>{p.name}</p>
                            <p id="p-cateogry">{p.category}</p>
                            <p>${p.price.toLocaleString()}</p>
                            <button onClick={() => handleDelete(p.id)} className="admin-btnDelete">Eliminar</button>
                        </li>
                    ))}
                </ul>
            </div>

            {showModal && (
                <ConfirmModalCart 
                onConfirm={handleDeleteConfirm}
                onCancel={handleCancel}
                message={message}
                prompt={"¿Desea eliminar el producto de la Base de Datos?"}/>                
            )}
        </>
    );
};