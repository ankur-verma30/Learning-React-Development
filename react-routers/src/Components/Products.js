import { Link, Outlet } from "react-router-dom"


export const Products = () => {
    return (
        <>

            <div>
                <input type='search' placeholder='Search for products' />
            </div>
            <nav>
                <Link to='featured-products'>Features</Link>
                <Link to='new-products'>New</Link>
            </nav>
            <Outlet />
        </>
    )
}