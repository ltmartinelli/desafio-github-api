import Button from '../../../components/Button';
import './styles.css';

const name = "NELIO";

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

                <div className="profile-card">
                    <img className="profile-card-img" src="https://avatars.githubusercontent.com/u/13897257?v=4" alt="pic" />
                    <div className="profile-card-info">
                        <h2>Informações</h2>
                        <div className="profile-card-info-field-container">
                            <div className="profile-card-info-field"><b>Perfil:</b> https://api.github.com/users/acenelio </div>
                            <div className="profile-card-info-field"><b>Seguidores:</b> 4379</div>
                            <div className="profile-card-info-field"><b>Localidade:</b> Uberlandia</div>
                            <div className="profile-card-info-field"><b>Nome:</b> {name}</div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
} 