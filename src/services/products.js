const BASE_URL = "https://691f471ebb52a1db22c124a1.mockapi.io/products";

export const createProduct = async (product) => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(product)
    });

    if (!res.ok) {
        throw new Error("No se pudo crear el producto");
    }

    const result = await res.json();
    return result;
};

export const getProducts = async (category) => {
    let url = BASE_URL;
    if (category) {
        url = `${BASE_URL}?category=${category}`;
    }

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error("Error al listar productos");
    }

    const results = await res.json();
    const parsedResult = results.map(product => ({
        ...product, description: JSON.parse(product.description)
    }));
    return parsedResult;
};

export const getProductById = async (id) => {
    let url = BASE_URL;
    if (id) {
        url = `${BASE_URL}/${id}`;
    }
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error("Producto no encontrado");
    }

    const product = await res.json();
    return { ...product, description: JSON.parse(product.description) };
}

/**************************************************************/
export const deleteProduct = async (id) => {
    const url = `${BASE_URL}/${id}`;
    const res = await fetch(url, { method: "DELETE" });

    if (!res.ok) {
        throw new Error("No se pudo eliminar el producto");
    }

    return true;
}


