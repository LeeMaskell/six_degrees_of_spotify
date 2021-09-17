import { useState } from 'react';
import starterArtist from '../../data/StarterArtistsData';
import targetArtist from '../../data/TargetArtistsData';
import Spotify from '../container/SpotifyAPI';


import { RelArtistListRender } from './RelArtistListRender';
import StarterArtist from './StarterArtistDisplay';
import TargetArtist from './TargetArtistDisplay';
import ArtistChoiceDisplay from './ArtistChoiceDisplay';
import StartButton from './StartButton';

const PlayScreen = () => {
    const [artist1, setArtist1] = useState(null);
    const [display, setDisplay] = useState(false);
    const [displayNone, setDisplayNone] = useState(false);
    const [buttonDisplay, setButtonDisplay] = useState(true);
    const [artist2, setArtist2] = useState(null);
    const [counter, setCounter] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [artistChain, setArtistChain] = useState([]);
    const [value, setSelectValue] = useState(null);
    const [relArtist, setRelArtist] = useState([]);
    const [win, setWin] = useState(false);
    const [lose, setLose] = useState(false);

    const handleStarter = (e) => {
        let startArtist = starterArtist[Math.floor(Math.random() * starterArtist.length)];
        setArtist1(startArtist); // randomly selected starter artist is saved as a variable that can be referenced along with properties of that artist
        let endArtist = targetArtist[Math.floor(Math.random() * targetArtist.length)];
        setArtist2(endArtist);
        setRelatedArtist(startArtist.ref); // sets the random starter artist to current state. This sets dropdown to related artists of randomly selected starter artist
        setDisplay(true);
        setDisplayNone(true);
        setButtonDisplay(false);
    }

    const onRelatedSelected = (e) => { // this function takes the selected artist (from dropdown), searches spotify for the related artists and then re-populates the dropdown with the new set of related artists
        setCounter(counter + 1);
        const related = relArtist.find(a => a.ref == e.target.value); // search relArtist array for the artist selecetd fom the dropdown and assign it to a variable.

        setRelatedArtist(e.target.value);
        setArtistChain([...artistChain, related]); // artistChain.push(related);// adds each successive related artist as a list element to be rendered
        setSelectValue(null);
        if (related.id === artist2.ref) {
            setWin(true);
            setArtistChain([]);
        }
        if (counter === 5) {
            related.id === artist2.ref ? setWin(true) : setLose(true);
            setArtistChain([]);
        }
    }

    const setRelatedArtist = (idOfArtist) => {
        setIsLoading(true); // state change that disables/greys out the dropdown once the selction is made to prevent spamming
        Spotify.getRelatedArtists(idOfArtist).then(res => { // calls the Spotify function (from UseFetch component) and searches the API
            setRelArtist(res); // changes the stae of the dropdown with the new set of related artists
            setIsLoading(false); // enables/removes the greyed out dropdown and makes it selectable again
        });
    }

    return (
        <div className="play-screen">
            <form className="artist-display">
                <label id="label" htmlFor="search-term" className={displayNone ? "display-none" : ""}>Click to generate your starter and target artists</label><br></br><br></br>
                <StartButton handleStarter={handleStarter} buttonDisplay={buttonDisplay} />
                <form className={display ? "display" : ""}>
                    <label for="select">Select related artist</label><br></br>
                    <ArtistChoiceDisplay isLoading={isLoading}
                        value={value}
                        onRelatedSelected={onRelatedSelected}
                        relArtist={relArtist}
                    />
                </form>
                <div className="play-grid">
                    <StarterArtist artist1={artist1} />
                    <RelArtistListRender artistChain={artistChain} win={win} lose={lose} />
                    <TargetArtist artist2={artist2} />
                </div>
            </form>
        </div>
    );
}

export default PlayScreen;