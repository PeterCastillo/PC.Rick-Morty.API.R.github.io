import Form from "./components/Form"
import SettData from "./components/SetData"
import { useState } from "react"

function App() {

  const [ personaje ,  setPersonaje] = useState('')

  return (
    <div className="container">
      <h1 className="text-center">Rick & Morty API</h1>
      <Form setPersonaje={setPersonaje} />
      <SettData personaje={personaje}/>
    </div>
  )
}

export default App
