export const calculateDiscountPrice = (price, category) => {
    let descuento = 0;

    if (category === "Celulares") {
        descuento = 15;
    } else if (category === "Notebook") {
        descuento = 20;
    } else {
        descuento = 10;
    }

    const newPrice = Math.round(price * (1 - descuento / 100));
    return { newPrice, descuento };
};




