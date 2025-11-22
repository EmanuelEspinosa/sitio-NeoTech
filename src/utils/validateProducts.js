import { fieldsByCategory } from "../../public/data/fieldsByCategory";

export const validateProduct = (product, fileRequired = true) => {
    const errors = {}
    if (!product.name.trim()) {
        errors.name = "⚠️ El nombre del producto es obligatorio";
    }

    if (!product.brand) {
        errors.brand = "⚠️ La marca del producto es obligatoria";
    }

    if (!product.category.trim()) {
        errors.category = "⚠️ La categoria del producto es obligatoria";
    }

    if (!product.feature) {
        errors.feature = "⚠️ Las caracteristicas del producto son obligatorias";
    }


    const requiredFields = fieldsByCategory[product.category] || [];
    const missingFields = requiredFields.filter(field => !product[field] || !product[field].trim());

    if (missingFields.length > 0) {
        errors.description = `⚠️ Debe completar los campos: ${missingFields.join(", ")}`;
    }

    // if(!product.description){
    //     errors.description = "La descripcion del producto es obligatoria";
    // }

    if (!product.price || product.price <= 0) {
        errors.price = "⚠️ El precio del producto debe ser mayor a cero";
    }

    if (fileRequired && !product.file) {
        errors.file = "⚠️ Debes seleccionar una imagen";
    }

    if (!product.valoracion || product.valoracion < 1 || product.valoracion > 5) {
        errors.valoracion = "⚠️ La valoracion del producto debe ser un valor entre 1 y 5";
    }

    return errors;
}