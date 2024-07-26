import { NavLink } from "react-router-dom"

export const Navbar = () => {
    const navlinkStyles = (isActive) => {
        return {
            font: 'Monospace',
            fontWeight: isActive ? 'bold' : 'italic',
            TextDecoration: isActive ? 'none' : 'underline',
            color: isActive ? 'red' : 'blue',
        }
    }
    return (
        <div>
            <nav>
                <NavLink style={navlinkStyles} to='/'>Home</NavLink>
                <NavLink style={navlinkStyles} to='about'>About</NavLink>
            </nav>
        </div>
    )
}
