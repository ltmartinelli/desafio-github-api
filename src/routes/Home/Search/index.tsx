import Button from '../../../components/Button';
import ProfileCard from '../../../components/ProfileCard';
import { ProfileDTO } from '../../../models/profile';
import './styles.css';

const profile : ProfileDTO = {
    name: "wdwdq",
    url: "wdwdwd",
    location: "wevwev",
    followers: 123123,
}

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

                <ProfileCard profile={profile}/>                

            </div>
        </main>
    );
} 