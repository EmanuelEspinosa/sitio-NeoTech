import { fieldsByCategory } from "../../../../public/data/fieldsByCategory";
import "./ProductFormUI.css"

export const ProductFormUI = ({
    product,
    errors,
    loading,
    onChange,
    onFileChange,
    onSubmit,
    onReset,
    // fieldsByCategory
}) => {
    return (
        <div className="productFormContainer">
            <section className="product-form">
                <form onSubmit={onSubmit} className="form">
                    <h2 className="form-title">Cargar nuevo producto</h2>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Nombre"
                            name="name"
                            value={product.name}
                            onChange={onChange}
                            className="form-control"
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>


                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Marca"
                            name="brand"
                            value={product.brand}
                            onChange={onChange}
                            className="form-control"
                        />
                        {errors.brand && <p className="error">{errors.brand}</p>}
                    </div>

                    <div className="form-group">
                        <select
                            name="category"
                            value={product.category}
                            onChange={onChange}
                            className="form-control"
                        >
                            <option value="">Seleccione categoría</option>
                            {Object.keys(fieldsByCategory).map((item) => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                        {errors.category && <p className="error">{errors.category}</p>}
                    </div>

                    <div className="form-group">
                        <textarea
                            type="text"
                            placeholder="Caracteristicas"
                            name="feature"
                            value={product.feature}
                            onChange={onChange}
                            className="form-control textarea"
                        ></textarea>
                        {errors.feature && <p className="error">{errors.feature}</p>}
                    </div>

                    <div className="form-group">
                        {fieldsByCategory[product.category]?.map(field => (
                            <input
                                key={field}
                                type="text"
                                placeholder={field}
                                name={field}
                                value={product[field] || ""}
                                onChange={onChange}
                                className="form-control description"
                            />
                        ))}
                        {errors.description && <p className="error">{errors.description}</p>}
                    </div>

                    <div className="form-group">
                        <input
                            type="number"
                            placeholder="Precio"
                            name="price"
                            min={1}
                            value={product.price}
                            onChange={onChange}
                            className="form-control"
                        />
                        {errors.price && <p className="error">{errors.price}</p>}
                    </div>

                    <div className="form-group">
                        <input
                            type="file"
                            placeholder="Imagen"
                            accept="image/*"
                            onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
                            className="form-control file-input"
                        />
                        {errors.imageUrl && <p className="error">{errors.imageUrl}</p>}
                    </div>

                    <div className="form-group">
                        <input
                            type="number"
                            placeholder="Valoracion"
                            name="valoracion"
                            value={product.valoracion}
                            onChange={onChange}
                            className="form-control"
                        />
                        {errors.valoracion && <p className="error">{errors.valoracion}</p>}
                    </div>

                    <div className="form-actions">

                        <button className="btn btn-primary" type="submit" disabled={loading}>
                            {loading ? "Guardando..." : "Guardar"}
                        </button>

                        <button type="button" className="btn btn-secondary" onClick={onReset}>
                            Limpiar
                        </button>
                    </div>
                </form>
            </section>
        </div>

    )
}