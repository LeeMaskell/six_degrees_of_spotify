import React from 'react'

const TargetArtist = ({ artist2 }) => {
    return (
        <div className="artist">
            {artist2 != null &&
                <div >
                    <img id="start-img" className="image-display" src={artist2.image}></img>
                    <h2 id="white">Target Artist: {artist2.name}</h2>
                </div>
            }
        </div>
    )
}

export default TargetArtist;