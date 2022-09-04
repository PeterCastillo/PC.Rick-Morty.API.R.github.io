export const getData = async( initialPersonaje ) => {
        try {
            const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${initialPersonaje}&status=alive`)
            const data = await res.json()
            const personajeData = data.results
            return personajeData
        } catch (error) {
            console.log(error)
        }
}