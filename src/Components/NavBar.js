import '../Styles/Styles.css'
import { Link } from 'react-router-dom';



function NavBar() {
    return(
        <div className="nav_grid">

            <Link className="Link" to="/">
                <h1 className="nav_text">Home</h1>
            </Link>

            <Link className="Link" to="/shop">
                <h1 className="nav_text">Shop</h1>
            </Link>


            <Link className="Link" to="/shop">
                <h1 className="nav_text">About</h1>
            </Link>

            <Link className="Link" to="/checkout">
                <h1 className="nav_text">🛒</h1>
            </Link>


       </div>
    );
}


export default NavBar
