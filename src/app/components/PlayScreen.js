import { useState } from 'react';
import { createStore } from 'redux';
import starterArtist from './StarterArtists';
import targetArtist from './TargetArtists';
import Spotify from './SpotifyAPI';

const PlayScreen = () => {
    const [artist1, setArtist1] = useState(null);
    
    const handleStarter = (e) => {
        e.preventDefault();
        console.log(document.getElementById("artist1"));
        let startArtist = starterArtist[Math.floor(Math.random() * starterArtist.length)];
        // artistChain.push(startArtist.name); prints starting artist to artistChain list
        setArtist1(startArtist); // randomly selected starter artist is saved as a variable that can be referenced along with properties of that artist
        let endArtist = targetArtist[Math.floor(Math.random() * targetArtist.length)];
        setArtist2(endArtist);
        setRelatedArtist(startArtist.ref); // sets the random starter artist to current state. This sets dropdown to related artists of randomly selected starter artist
        document.getElementById("firstChoice").style.display = "block";
        document.getElementById("label").style.display = "none";
    }

    const onRelatedSelected = (e) => { // this function takes the selected artist (from dropdown), searches spotify for the related artists and then re-populates the dropdown with the new set of related artists
        setCounter(counter + 1);
        const related = relArtist.find(a => a.ref == e.target.value); // search relArtist array for the artist selecetd fom the dropdown and assign it to a variable.
        document.getElementById("relImg").src = related.image; // assign above variable.image (to reference the image) as the src attribute
        setRelatedArtist(e.target.value);
        artistChain.push(e.target.selectedOptions[0].innerText);// adds each successive related artist as a list element to be rendered
        document.getElementById("listSelection").value = null;
        setSelectValue(null);
        document.getElementById("relArtistLabel").innerHTML = "Select next related artist";
        if (related.id === artist2.ref) {
            document.getElementById("completionMessage").innerHTML = "congratulations you win";
        }
        if (counter === 5) {
            // setIsLoading(true);
            related.id === artist2.ref ? document.getElementById("completionMessage").innerHTML = "congratulations you win" :
                document.getElementById("completionMessage").innerHTML = "Unlucky, try again?";
        }
    }

    const setRelatedArtist = (idOfArtist) => {
        setIsLoading(true); // state change that disables/greys out the dropdown once the selction is made to prevent spamming
        Spotify.getRelatedArtists(idOfArtist).then(res => { // calls the Spotify function (from UseFetch component) and searches the API
            setRelArtist(res); // changes the stae of the dropdown with the new set of related artists
            setIsLoading(false); // enables/removes the greyed out dropdown and makes it selectable again
        });
    }
    
    const [artist2, setArtist2] = useState(null);
    const [counter, setCounter] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [artistChain, setArtistChain] = useState([]);
    const [value, setSelectValue] = useState(null);
    const [relArtist, setRelArtist] = useState([]);
    return (
        <div id="playScreen">
            <div id="choice">
                <form className="artistDisplay">
                    <label id="label" htmlFor="searchTerm">Click to generate your starter and target artists</label><br></br><br></br>
                    <button type="button" id="searchButton" onClick={handleStarter}>Start</button>
                    <form id="firstChoice">
                        <label id="relArtistLabel" for="select">Select first related artist</label><br></br>
                        <select disabled={isLoading} id="listSelection" name="select" value={value} onChange={onRelatedSelected}>
                            <option disabled selected value> -- select an option -- </option>
                            {
                                relArtist.map(item => {
                                    return <option value={item.ref}>{item.name}</option>
                                })
                            }
                        </select>
                    </form>
                    <div id="playGrid">
                        {artist1 != null &&
                            <div className="artist">
                                <img id="startImg" className="imageDisplay" src={artist1.image}></img>
                                <h2>Starting Artist: {artist1.name}</h2>
                            </div>
                        }
                        <div id="relArtistListRender">
                            <ul>
                                {
                                    artistChain.map(item => {
                                        return <li >{item}</li>
                                    })
                                }
                            </ul>
                            <img id="relImg" src=""></img>
                            <h2 id="completionMessage"></h2>
                        </div>

                        {artist2 != null &&
                            <div className="artist">
                                <img className="imageDisplay" src={artist2.image}></img>
                                <h2 id="h2White">Target Artist: {artist2.name}</h2>
                            </div>
                        }
                    </div>
                </form>

            </div>
        </div>
    );
}

export default PlayScreen;