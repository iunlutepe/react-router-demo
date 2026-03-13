import { useLoaderData } from "react-router";

const Team = () => {
const team = useLoaderData()
    return <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <div>
            <img src={`/imgs/${team?.picture}`} style={{height: '175px', width: '300px'}} alt=""/>
        </div>
        <div style={{height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '250px'}} >
            <p>Full name: {team.teamName}</p>
            <p>League: {team.league}</p>
            <p>Country: {team.country}</p>
            <p>Stadium: {team.stadium}</p>
            <p>Founded: {team.Founded}</p>
        </div>
    </div>
}

export default Team
