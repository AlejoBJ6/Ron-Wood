import AgregarProducto from "./AgregarProductos.jsx";

function App() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "center",
      minHeight: "100vh",
      gap: "3rem"
    }}>
      <div style={{ flex: "0 0 370px" }}>
        <AgregarProducto />
      </div>
      <div style={{ flex: "1", display: "flex", justifyContent: "center", alignItems: "center" }}>
        {/* Aquí van las tarjetas de productos */}
        {/* <TarjetasProductos /> */}
      </div>
    </div>
  );
}

export default App;
