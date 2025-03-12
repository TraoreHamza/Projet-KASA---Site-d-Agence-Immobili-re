import './style.scss';
import { Link, NavLink } from 'react-router';

const Header = () => {
    return (
        <header className='header'>
            <Link to="/">
                <img src="/logo.svg" alt="Logo kasa" />
            </Link>

            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/a_propos">A propos</NavLink>
            </nav>
        </header>
    );
};

export default Header;