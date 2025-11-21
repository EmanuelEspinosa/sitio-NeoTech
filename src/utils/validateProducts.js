export const validateProduct = (product, fileRequired = true) => {
    const errors = {}
    if(!product.name.trim()){
        errors.name = "El nombre del producto es obligatorio";
    }

    if(!product.brand){
        errors.brand = "La marca del producto es obligatoria";
    }

    if(!product.category.trim()){
        errors.category = "La categoria del producto es obligatoria";
    }

    if(!product.feature){
        errors.feature = "Las caracteristicas del producto son obligatorias";
    }

    if(!product.description){
        errors.description = "La descripcion del producto es obligatoria";
    }

    if(!product.price || product.price <= 0){
        errors.price = "El precio del producto debe ser mayor a cero";
    }

    if(fileRequired && !product.file){
        errors.file = "Debes seleccionar una imagen";
    }

    if(!product.valoracion <= 0){
        errors.valoracion = "La valoracion del producto debe ser mayor a cero";
    }

    return errors; 
}