import { useState } from 'react'

export default function Produto({ nome, precoAntigo, precoNovo }) {
  const [favorito, setFavorito] = useState("Favoritar");

  function favoritar() {
    setFavorito(favorito === "Favoritar" ? "Favoritado" : "Favoritar");
  }

  return (
    <>
      <div
        style={{
          border: "1px solid black",
          width: "200px",
          padding: "10px",
          margin: "10px",
          borderRadius: "8px",
        }}
      >
        <div style={{ marginTop: "8px", fontWeight: "bold" }}>
          {nome}
        </div>

        <div style={{ marginTop: "8px", fontSize: "12px" }}>
          {precoAntigo && (
            <span style={{ textDecoration: "line-through", color: "#999" }}>
              R$ {precoAntigo}
            </span>
          )}

          {precoNovo && (
            <span style={{
              color: "#27ae60",
              marginLeft: "8px",
              fontWeight: "bold"
            }}>
              R$ {precoNovo}
            </span>
          )}
        </div>

        <button
          onClick={favoritar}
          style={{
            marginTop: "8px",
            width: "100%",
            padding: "6px",
            cursor: "pointer"
          }}
        >
          {favorito}
        </button>
      </div>
    </>
  );
}