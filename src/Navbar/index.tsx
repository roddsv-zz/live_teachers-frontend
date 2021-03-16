import './styles.css';
import { ReactComponent as Logo, ReactComponent} from './logo.svg';
import { Link, Router } from 'react-router-dom';

function Navbar() {
    return(
        <nav className="main-navbar">
            <Logo />
            <Link to="/" className="logo-text">LiveTeachers.com</Link>            
        </nav>
    )
}

export default Navbar;