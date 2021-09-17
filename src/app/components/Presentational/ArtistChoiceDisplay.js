import React from 'react'

const ArtistChoiceDisplay = ({isLoading, value, onRelatedSelected, relArtist}) => {
    return (
        <div>
            <select disabled={isLoading} name="select" value={value} onChange={onRelatedSelected}>
                <option disabled selected value> -- select an option -- </option>
                {
                    relArtist.map(item => {
                        return <option value={item.ref}>{item.name}</option>
                    })
                }
            </select>
        </div>
    )
}

export default ArtistChoiceDisplay
