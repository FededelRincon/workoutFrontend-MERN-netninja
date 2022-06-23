import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <NavLink to="/" className={ ({ isActive }) => isActive ? "nav-active" : ""} >
                    <h1>Workout Buddy</h1>
                </NavLink>

                <NavLink to="/algo" className={ ({ isActive }) => isActive ? "nav-active" : "" } >Algo</NavLink>
                <NavLink to="/otro" className={ ({ isActive }) => isActive ? "nav-active" : "" } >Otro</NavLink>

            </div>
        </header>
    )
}

export default Navbar;