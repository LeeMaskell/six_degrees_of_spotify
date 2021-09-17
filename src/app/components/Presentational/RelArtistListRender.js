import React from 'react'

export const RelArtistListRender = ({ artistChain, win, lose }) => {

    console.log(artistChain);
    return (
        <div className="rel-artist-list-render">
            <div>
                <ul>
                    {
                        artistChain.map(item => {
                            return <li >{item.name}</li>
                        })
                    }
                </ul>
                <img className="rel-img" src={artistChain.length > 0 ? artistChain[artistChain.length - 1].image : ""}></img>
            </div>
            <h2 className={win ? "display" : "display-none"}>Congratulations you win!</h2>
            <h2 className={lose ? "display" : "display-none"}>Unlucky, refresh to play again?</h2>
        </div>
    )
}
