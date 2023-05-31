import { useEffect, useState } from 'react';
import ProfileCard from '../../../components/ProfileCard';
import { ProfileDTO } from '../../../models/profile';
import * as profileService from '../../../services/profile-service.ts';
import './styles.css';

type FormData = {
    profileName: string;
}


export default function Search()
{

    const [profile, setProfile] = useState<ProfileDTO>();

    const [formData, setFormData] = useState<FormData>({ profileName: "" });

    const [profileName, setProfileName] = useState<string>("");

    useEffect(() =>
    {
        profileService.getProfile(profileName)
            .then(response =>
            {
                setProfile(response.data);
            }
            )
            .catch(() =>
            {
                {
                    setProfile(undefined);
                }
            })
    }, [profileName]
    )

    function handleInputChange(event: any)
    {
        setFormData({ ...formData, profileName: event.target.value })
    }

    function handleFormSubmit(event: any)
    {
        event.preventDefault();
        setProfileName(formData.profileName);
    }

    return (
        <main>
            <div className="container">

                <div className="form-container">
                    <h1>Encontre um perfil Github</h1>
                    <form onSubmit={handleFormSubmit}>
                        <input type="text" name="profileName" value={formData.profileName} onChange={handleInputChange} placeholder="Usuário GitHub" />
                        <button type="submit" className="form-button">
                            Encontrar
                        </button>
                    </form>

                </div>

                {
                    profile ?
                        <ProfileCard profile={profile} />
                        :
                        profileName ?
                            <h1>Erro ao buscar usuário</h1>
                            :
                            <>
                            </>
                }


            </div>
        </main>
    );
} 