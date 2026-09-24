import { useState } from 'react'

function App() {
  const [cont, setCont] = useState(0)
  
  function contador(){
    setCont(cont+1)
  }
  return (
    <>
      <h1>clique {cont + 12345}</h1>
      <button onClick={contador}>clique aqui</button>
    </>
  )
}

export default App
