import { NavLink } from "react-router-dom"

const Contact = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h2>Cuentanos, ¿En qué te podemos ayudar?</h2>
            <form action="" className="d-flex flex-column align-items-center justify-content-center gap-2">
                <label htmlFor="">Correo Electrónico:</label>
                <input required placeholder="Escribe aquí tu email" type="email" />
                <label htmlFor="">Tu Mensaje:</label>
                <input required placeholder="Escribe aquí tu mensaje" type="text" />
                <button className="btn btn-danger" type="submit">Enviar</button>
            </form>
            <button className="btn btn-danger mt-3">
                <NavLink className="text-decoration-none text-white" to="/">Volver A Inicio</NavLink>
            </button>
        </div>
    )
}

export default Contact