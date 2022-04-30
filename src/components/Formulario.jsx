import { useState } from "react"

const Formulario = () => {

  const [todo, setTodo] = useState({
    todoName : "",
    todoDescripcion : "",
    todoEstado : "pendiente",
    todoCheck : false,
  })

  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const {todoName, todoDescripcion} = todo

    if (!todoDescripcion.trim() || !todoName.trim()) {
      setError(true)
      return
    }

    setError(false)
  }

  const handleChange = (e) => {
    setTodo({
      ...todo, 
      [e.target.name] : e.target.type === "checkbox" ? e.target.checked : e.target.value  
    })
  }

  const PintarError = () => (
    <div className="alert alert-danger">Campos Obligatorios</div>
  )

  return (
    <>
      <h2>Formulario CONTROLADO</h2>
      
    {error && <PintarError />}

      <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Ingrese TO DO"
                name="todoName"
                className="form-control mb-2"
                onChange={handleChange}
                value={todo.todoName}
            />
            <textarea 
                name="todoDescripcion"
                className="form-control mb-2"
                placeholder="Ingrese descripcion del To Do"
                onChange={handleChange}
                value={todo.todoDescripcion}
            />
            <select 
                name="todoEstado"
                className="form-control mb-2"
                onChange={handleChange}
            >
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>

            <div className="form-check">
            <input 
            className="form-check-input" 
            type="checkbox" 
            checked={todo.todoCheck} 
            name="todoCheck"
            id="flexCheckDefault"
            onChange={handleChange}
            />
            <label 
            className="form-check-label" 
            htmlFor="flexCheckDefault">
               Dar Prio
            </label>
            </div>

            <button 
                className="btn btn-primary"
                type="submit"
                value={todo.todoEstado}
            >
                Agregar
            </button>
        </form>
    </>
  )
}

export default Formulario