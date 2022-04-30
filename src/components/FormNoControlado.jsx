import React, { useRef } from "react"

const FormNoControlado = () => {

    const formulario = useRef(null)

    const handleSubmit = e => {
        e.preventDefault()
    
        const datos = new FormData(formulario.current)

        console.log(...datos.entries())

        const objetoDatos = Object.fromEntries([...datos.entries()])
        console.log(objetoDatos)

        const {todoDescripcion, todoEstado, todoName} = objetoDatos

        if (!todoDescripcion.trim() || !todoName.trim()){
            console.log("NOOOOOOOOOOOO")

            return
        }

        console.log("Paso validacion")
    }

  return (
    <>
        <h2>NO CONTROLADO</h2>
        <form ref={formulario} onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Ingrese TO DO"
                name="todoName"
                className="form-control mb-2"
                defaultValue="Tarea #01"
            />
            <textarea 
                name="todoDescripcion"
                className="form-control mb-2"
                placeholder="Ingrese descripcion del To Do"
                defaultValue="Descripcion Tarea #01"
            />
            <select 
                name="todoEstado"
                className="form-control mb-2"
                defaultValue="pendiente"
            >
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>
            <button 
                className="btn btn-primary"
                type="submit"
            >
                Agregar
            </button>
        </form>
    </>
  )
}

export default FormNoControlado