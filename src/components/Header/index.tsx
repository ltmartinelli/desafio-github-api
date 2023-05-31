import { Link } from 'react-router-dom';
import './styles.css';

export default function Header()
{
    return (
        <header>
            <Link to="/"> <h1 className="header-title">GitHub API</h1></Link>
        </header>
    );
}