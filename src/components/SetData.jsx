import { useEffect } from "react"
import { getData } from "../hooks/getData"
import Loading from "./Loading"
import Personaje from "./Personaje"

const SettData = ( { personaje }) => {

    const {  data , loading , setLoading  } = getData(personaje)

    useEffect(() => {
        setLoading(true)
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
                // personajeData.map(item => (
                //     <Personaje key={item.id} personajeInfo={item}/>
                // ))
                data.map(item => (
                    <Personaje key={item.id} personajeInfo={item}/>
                ))
            }
        </div>
    )
}

export default SettData