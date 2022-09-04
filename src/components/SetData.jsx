import { useEffect, useState } from "react"
import { getData } from "../hooks/getData"
import Personaje from "./Personaje"

const SettData = ( { personaje }) => {

    const [ personajeData , setPersonajeData]= useState([])

    const getData = async( initialPersonaje ) => {
        try {
            const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${initialPersonaje}&status=alive`)
            const data = await res.json()
            setPersonajeData(data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData(personaje)
        console.log("HOla")
    },[personaje])


    return (
        <div className="row mt-3">
            {
                personajeData.map(item => (
                    <Personaje key={item.id} personajeInfo={item}/>
                ))
            }
        </div>
    )
}

export default SettData