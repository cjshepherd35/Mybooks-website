
import { Link } from "react-router-dom";

//navbar of books: all books and ones i have read, want to read, and am in the middle of reading. 
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="links">
                <Link to="/">all books</Link>
                <Link to="/read">have read</Link>
                <Link to="/notread">not read</Link>
                <Link to="/reading">reading</Link>
                <Link to="/people">Peoples choices</Link>
                <Link to="/add">add yours</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;