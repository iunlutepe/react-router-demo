import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
    const navigate = useNavigate()
  
    return (
        <div className="container" style={{ alignItems: 'center', flexDirection: 'column'}}>
            <img src={`/imgs/player.png`} alt="" style={{height: '230px'}}/>
                <h1 style={{margin: '0'}}>React router outlet demo</h1>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button style={{fontSize: '16px', height: '24px', width: '125px', cursor: 'pointer', color: 'white', background: '#f1356d', borderRadius: '6px', border: '1px solid #f1356d'}} onClick={() => navigate('/players/player/1')}>Go to players</button>
            </div>
        </div>
    )
}

export default Home