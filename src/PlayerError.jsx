const PlayerError = () => {

    return (
        <div style={{width: '100%'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                <img src={'/imgs/blankAvatar.png'} alt='' style={{ height: '164px', width: '200px'}}/>
                <p>Can't find player please select another player</p>
            </div>
        </div>
    )
}

export default PlayerError