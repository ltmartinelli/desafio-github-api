import './styles.css';
import Button from "../../../components/Button";
import { Link } from 'react-router-dom';

export default function HomePage()
{
    return (
        <main>
            <div className="homepage-content-container">
                <div className="homepage-title-container">
                    <h1>Desafio Github API</h1>
                    <h2>DevSuperior - Escola de programação</h2>
                </div>
                <Link to="/search"><Button text="Começar" /></Link>
            </div>
        </main>
    );
}