import { useNavigate, Outlet, useLoaderData } from "react-router-dom";

const Teams = () => {
    const navigate = useNavigate();
    const footballTeams = useLoaderData();


    const handleClick = (id) => {
        navigate(`/teams/team/${id}`)
    }

    return (
        <div>
            <div className={'container'}>
                <div className={'container-2'}>
                    <p style={{margin: '0', cursor: 'pointer', width: '53px'}} onClick={() => navigate('/')}>
                        ← Back
                    </p>
                    {footballTeams.map((team) => (
                        <div key={team.id} className={'card'} onClick={() => handleClick(team.id)}>
                            <p style={{margin: '0'}}>{team?.teamName}</p>
                        </div>
                    ))}
                </div>
                <Outlet/>
            </div>
        </div>
    )
}

export default Teams