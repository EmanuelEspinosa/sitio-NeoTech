import { useState } from "react"
import { ProductFormUI } from "../ProductFormUI/ProductFormUI";
import { validateProduct } from "../../../utils/validateProducts";
import { uploadToImgbb } from "../../../services/uploadImage";
import { createProduct } from "../../../services/products";
import { fieldsByCategory } from "../../../../public/data/fieldsByCategory";
import { ConfirmModalCart } from "../../../layout/confirmModalCart/ConfirmModalCart";

const initialProduct = {
    name: "",
    brand: "",
    category: "",
    feature: "",
    description: "",
    price: "",
    valoracion: ""
};

export const ProductFormContainer = () => {
    const [showModal, setShowModal] = useState(false);
    const [messageConfirm, setMessageConfirm] = useState("");
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);
    const [errors, setErrors] = useState({});
    const [product, setProduct] = useState(initialProduct);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleReset = () => {
        setProduct(initialProduct);
        setFile(null);
        setErrors({});
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true);

        const newErrors = validateProduct({ ...product, file });
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }

        try {
            const imageUrl = await uploadToImgbb(file);

            // Construir objeto description según categoría
            const descriptionObj = {};
            fieldsByCategory[product.category]?.forEach(field => {
                descriptionObj[field] = product[field];
            });

            const productData = {
                name: product.name,
                brand: product.brand,
                category: product.category,
                feature: product.feature,
                description: JSON.stringify(descriptionObj),
                price: Number(product.price),
                imageUrl,
                valoracion: Number(product.valoracion)
            };

            await createProduct(productData);
            setShowModal(true);
            setMessageConfirm("Producto cargado con éxito");
            setTimeout(() => {
                setShowModal(false);
                setMessageConfirm("");
            }, 3000);
            // alert("Producto cargado con exito");

            setProduct(initialProduct);
            setFile(null);
        } catch (error) {
            setErrors({ general: error.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <ProductFormUI
                product={product}
                errors={errors}
                onChange={handleChange}
                onFileChange={setFile}
                loading={loading}
                onSubmit={handleSubmit}
                onReset={handleReset}
            />

            {showModal && (
                <ConfirmModalCart message={messageConfirm} />
            )}
        </>

    );
}