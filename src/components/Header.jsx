import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <div className="w-100 bg-warning d-flex justify-content-around align-items-center p-3">
            <nav className="d-flex gap-5">
                <NavLink className="text-decoration-none text-dark fs-3" to="/">Home 🏠</NavLink>
                <NavLink className="text-decoration-none text-dark fs-3" to="/Contacto">Contacto 📙</NavLink>
            </nav>
            <h1 className="text-dark fs-3">Happy Cake 🍰</h1>
        </div>
    )
}

export default Header