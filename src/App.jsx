import Form from "./components/Form"
import SettData from "./components/SetData"
import { useEffect, useState } from "react"

function App() {

  const [ personaje ,  setPersonaje] = useState('')

  // useEffect(() => {
  //   if(localStorage.getItem('getData')){
  //     setPersonaje(JSON.parse(localStorage.getItem('getData')))
  //   }
  // } ,[])

  // useEffect(() => {
  //     localStorage.setItem('getData' , JSON.stringify(personaje))
  // } , [personaje])

  return (
    <div className="container">
      <h1 className="text-center">Rick & Morty API</h1>
      <Form setPersonaje={setPersonaje} />
      <SettData personaje={personaje}/>
    </div>
  )
}

export default App
