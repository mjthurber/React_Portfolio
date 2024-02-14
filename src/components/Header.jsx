import { Link, useLocation} from 'react-router-dom';
import Nav from './Nav';

function Header() {
    const currentPage = useLocation().pathname;
    
    return (
        <header>
        <h1>Matthew Thurber - Web Dev with finance experience</h1>
            <Nav />

        </header>
    );

}

export default Header;