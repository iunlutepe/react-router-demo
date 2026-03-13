import {useNavigate, Outlet, useLoaderData, useNavigation} from "react-router-dom";

const Players = () => {
    const navigate = useNavigate();
    const footballPlayers = useLoaderData();

    const handleClick = (id) => { 
        navigate(`/players/player/${id}`)
    }

    return (
        <div>
            <div className={'container'}>
                <div className={'container-2'}>
                    <p style={{margin: '0', cursor: 'pointer', width: '53px'}} onClick={() => navigate('/')}>
                        ← Back
                    </p>
                    {footballPlayers.map((player) => (
                        <div key={player.id} className={'card'} onClick={() => handleClick(player.id)}>
                            <p style={{margin: '0'}}>{player.fullName}</p>
                        </div>
                    ))}
                </div>
                <Outlet/>
            </div>
        </div>
    )
}

export default Players