import { useEffect, useState } from "react"

export const getData = ( initialPersonaje ) => {

    const [ loading , setLoading ] = useState(false)
    const [ data , setData ] = useState([])

    const fetchAPI = async(personaje) => {
        try {
            const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${personaje}&status=alive`)
            const info = await res.json()
            setLoading(false)
            setData(info.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAPI(initialPersonaje)
    }, [initialPersonaje])

    return { data , loading , setLoading }
}