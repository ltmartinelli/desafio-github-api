import './styles.css';
import Button from "../../../components/Button";

export default function HomePage()
{
    return (
        <main>
            <div className="homepage-content-container">
                <div className="homepage-title-container">
                    <h1>Desafio Github API</h1>
                    <h2>DevSuperior - Escola de programação</h2>
                </div>
                <Button />
            </div>
        </main>
    );
}