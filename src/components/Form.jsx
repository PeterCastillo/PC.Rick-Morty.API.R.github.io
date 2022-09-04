import { useForm } from "../hooks/useForm"

const Form = ({ setPersonaje }) => {

    const [ inputs , handleChange , reset ] = useForm({
        nombre: '',
    })

    const { nombre } = inputs

    const handleSubmit = (e) => {
        e.preventDefault()
        setPersonaje(nombre.trim().toLowerCase())
        reset()
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                name="nombre"
                placeholder="Ingrese personaje" 
                className="form-control mb-2"
                value={ nombre }
                onChange={ handleChange }
            />
            <button className="btn btn-success col-12">Buscar</button>
        </form>
    )
}

export default Form