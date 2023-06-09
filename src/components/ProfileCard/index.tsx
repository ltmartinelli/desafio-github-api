import { ProfileDTO } from '../../models/profile';
import './styles.css'

type Props = {
    profile: ProfileDTO
}

export default function ProfileCard({ profile }: Props)
{
    return (
        <div className="profile-card">
            <img className="profile-card-img" src={profile.avatar_url} alt="avatar" />
            <div className="profile-card-info">
                <h2>Informações</h2>
                <div className="profile-card-info-field-container">
                    <div className="profile-card-info-field"><b>Perfil:</b> <span className="profile-url">{profile.url}</span></div>
                    <div className="profile-card-info-field"><b>Seguidores:</b> {profile.followers}</div>
                    <div className="profile-card-info-field"><b>Localidade:</b> {profile.location}</div>
                    <div className="profile-card-info-field"><b>Nome:</b> {profile.name}</div>
                </div>
            </div>
        </div>
    );
}