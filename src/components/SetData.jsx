import { useEffect, useState } from "react"
// import { getData } from "../hooks/getData"
import Loading from "./Loading"
import Personaje from "./Personaje"

const SettData = ( { personaje }) => {

    const [ personajeData , setPersonajeData]= useState([])
    const [ loading , setLoading ] = useState(false)

    const getData = async( initialPersonaje ) => {
        try {
            const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${initialPersonaje}&status=alive`)
            const data = await res.json()
            setLoading(false)
            setPersonajeData(data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setLoading(true)
        getData(personaje)
    },[personaje])


    if(loading){
        return (
            <div className="row mt-3">
                <Loading/>
            </div>
        )
    }

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