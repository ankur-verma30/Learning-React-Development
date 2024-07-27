import { NavLink } from "react-router-dom"
import { useAuth } from "./auth"




export const Navbar = () => {
    const navlinkStyles = (isActive) => {
        return {
            font: 'Monospace',
            fontWeight: isActive ? 'bold' : 'italic',
            TextDecoration: isActive ? 'none' : 'underline',
            Color: isActive ? 'green' : 'blue',
        }
    }

    const auth = useAuth()
    return (
        <div>
            <nav>
                <NavLink style={navlinkStyles} to='/'>Home</NavLink>
                <NavLink style={navlinkStyles} to='/about'>About</NavLink>
                <NavLink style={navlinkStyles} to='/products'>Products</NavLink>
                <NavLink style={navlinkStyles} to='/profile'>Profile</NavLink>
                {
                    !auth.user && (
                        <NavLink style={navlinkStyles} to='/login'>Login</NavLink>
                    )
                }
            </nav>
        </div>
    )
}
