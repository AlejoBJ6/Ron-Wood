import { useState } from "react";
import axios from "axios";

function AgregarProducto() {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/productos", {
        nombre,
        categoria,
        precio,
        stock,
      });
      alert("Producto agregado con éxito");
      setNombre("");
      setCategoria("");
      setPrecio("");
      setStock("");
    } catch (error) {
      console.error(error);
      alert("Error al agregar producto");
    }
  };

  return (
    <div>
      <div className="form-container">
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Gestión de Productos</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px", margin: "0 auto" }}>
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <label htmlFor="categoria">Categoría</label>
          <input
            id="categoria"
            type="text"
            placeholder="Categoría"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          />
          <label htmlFor="precio">Precio</label>
          <input
            id="precio"
            type="number"
            placeholder="Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
          <label htmlFor="stock">Stock</label>
          <input
            id="stock"
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
          <button type="submit">Agregar Producto</button>
        </form>
      </div>
    </div>
  );
}

export default AgregarProducto;
