import React from 'react'

const StartButton = ({handleStarter, buttonDisplay}) => {
    return (
        <div className={buttonDisplay ? "" : "display-none"}>
            <button type="button" id="search-button" onClick={handleStarter}>Start</button>
        </div>
    )
}

export default StartButton
