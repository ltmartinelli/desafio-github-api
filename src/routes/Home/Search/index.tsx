import { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import ProfileCard from '../../../components/ProfileCard';
import { ProfileDTO } from '../../../models/profile';
import * as profileService from '../../../services/profile-service.ts';
import './styles.css';


export default function Search()
{

    const [profile, setProfile] = useState<ProfileDTO>();

    useEffect(() =>
    {
        profileService.getProfile("acenelio")
            .then(response =>
            {
                setProfile(response.data)
            }
            )
    }
    )

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

                {
                    profile &&
                    <ProfileCard profile={profile} />
                }

            </div>
        </main>
    );
} 