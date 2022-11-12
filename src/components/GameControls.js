function GameControls(props){

    return (
        <div>
            <label>Level: {props.level}</label>
            <input
                id="level-input"
                type="range"
                onChange={props.handleChangeLevel} 
                name="level" 
                min="1" 
                max="5"
                value={props.level}>
            </input>
        </div>
    )
}

export default GameControls;