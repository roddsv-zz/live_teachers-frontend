import './styles.css';
import { ReactComponent as Logo, ReactComponent} from './logo.svg';

function Navbar() {
    return(
        <nav className="main-navbar">
            <Logo />
            <a href="home" className="logo-text">LiveTeachers.com</a>
        </nav>
    )
}

export default Navbar;