import React from 'react'

const StarterArtist = ({artist1}) => {
    return (
        <div className="artist">
            {artist1 != null &&
                            <div >
                                <img className="image-display" src={artist1.image}></img>
                                <h2>Starting Artist: {artist1.name}</h2>
                            </div>
                        }
        </div>
    )
}

export default StarterArtist;
