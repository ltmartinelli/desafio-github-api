import Button from '../../../components/Button';
import './styles.css';

export default function Search()
{
    return (
        <main>
            <div className="container">
                <div className="form-container">
                    <h1>Encontre um perfil Github</h1>
                    <form>
                        <input type="text" name="profileName" placeholder="Usuário GitHub" />
                    </form>
                    <Button text="Encontrar" />
                </div>
            </div>
        </main>
    );
} 