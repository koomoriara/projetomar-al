import { useState, useEffect } from 'react'
import Navbar from './navbar'
import Produtos from './Produtos'

function App() {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    fetch("https://6ac77b0175a4ce3fe721d344.mockapi.io/produto")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setProdutos(dados)
      })
  }, [])

  return (
    <>
      <Navbar />
      <Produtos produtos={produtos} />
    </>
  )
}

export default App
