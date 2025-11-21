export const ProductFormUI = ({
    product,
    errors,
    loading,
    onChange,
    onFileChange,
    onSubmit
}) => {
    return (
        <section>
            <form onSubmit={onSubmit}>
                <h2>Agregar producto</h2>
                <div>
                    <input
                        type="text"
                        placeholder="Nombre"
                        name="name"
                        value={product.name}
                        onChange={onChange}
                        />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                

                <div>
                    <input
                        type="text"
                        placeholder="Marca"
                        name="brand"
                        value={product.brand}
                        onChange={onChange}
                        />
                    {errors.brand && <p className="error">{errors.brand}</p>}
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Categoria"
                        name="category"
                        value={product.category}
                        onChange={onChange}
                        />
                    {errors.category && <p className="error">{errors.category}</p>}
                </div>

                <div>
                    <textarea
                        type="text"
                        placeholder="Caracteristicas"
                        name="feature"
                        value={product.feature}
                        onChange={onChange}
                    ></textarea>
                    {errors.feature && <p className="error">{errors.feature}</p>}
                </div>

                <div>
                    <textarea
                        placeholder="Descripcion"
                        name="description"
                        value={product.description}
                        onChange={onChange}
                    ></textarea>
                    {errors.description && <p className="error">{errors.description}</p>}
                </div>

                <div>
                    <input
                        type="number"
                        placeholder="Precio"
                        name="price"
                        value={product.price}
                        onChange={onChange}
                        />
                    {errors.price && <p className="error">{errors.price}</p>}
                </div>

                <div>
                    <input
                        type="file"
                        placeholder="Imagen"
                        accept="image/*"
                        onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
                        />
                    {errors.imageUrl && <p className="error">{errors.imageUrl}</p>}
                </div>

                <div>
                    <input
                        type="number"
                        placeholder="Valoracion"
                        name="valoracion"
                        value={product.valoracion}
                        onChange={onChange}
                        />
                    {errors.valoracion && <p className="error">{errors.valoracion}</p>}
                </div>

                <button className="btn" type="submit" disabled={loading}>
                    {loading ? "Guardando..." : "Guardar"}
                </button>
            </form>
        </section>
    )
}