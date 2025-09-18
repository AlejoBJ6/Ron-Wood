import React, { useState } from "react";

const AgregarProductos = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoProducto = {
      nombre,
      precio: parseFloat(precio),
      stock: parseInt(stock),
    };

    try {
      const response = await fetch("http://localhost:3001/productos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoProducto),
      });

      if (response.ok) {
        alert("✅ Producto agregado con éxito");
        setNombre("");
        setPrecio("");
        setStock("");
      } else {
        alert("❌ Error al agregar el producto");
      }
    } catch (error) {
      console.error("Error en la petición:", error);
      alert("❌ Error de conexión con el servidor");
    }
  };

  return (
    <div className="form-container">
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default AgregarProductos;
