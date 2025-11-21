const BASE_URL = "https://691f471ebb52a1db22c124a1.mockapi.io/products";

export const createProduct = async (product) => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {"Content-type" : "application/json"},
        body: JSON.stringify(product)
    });

    if(!res.ok){
        throw new Error("No se pudo crear el producto");
    }

    const result = await res.json();
    return result;
};