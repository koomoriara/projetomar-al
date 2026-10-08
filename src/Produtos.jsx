
import Produto from "./Produto";

export default function Produtos({ produtos }) {

  return (
    <div>
      <h1>Produtos</h1>

      {produtos.map((produto, index) => (
        <Produto
          key={index}
          nome={produto.nome}
          precoAntigo={produto.precoAntigo}
          precoNovo={produto.precoNovo}
        />
      ))}
    </div>
  );
}

