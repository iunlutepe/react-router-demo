import { useLoaderData } from "react-router";

const Player = () => {
const player = useLoaderData()

return <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <div>
                <img src={`/imgs/${player?.picture}`} style={{height: '300px', width: '300px'}} alt=""/>
            </div>
                <div style={{height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '250px'}} >
                    <p>Full name: {player.fullName}</p>
                    <p>Current team: {player.currentTeam}</p>
                    <p>Position: {player.position}</p>
                    <p>Nationality: {player.nationality}</p>
                    <p>Age: {player.age}</p>
                    <p>Transfer value: {player.transferValue}</p>
                </div>
        </div>
}

export default Player
