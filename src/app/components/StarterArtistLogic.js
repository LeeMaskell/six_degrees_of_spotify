export const StarterArtistLogic = () => {
const handleStarter = () => {
    console.log(document.getElementById("artist1"));
    let startArtist = starterArtist[Math.floor(Math.random() * starterArtist.length)];
    // artistChain.push(startArtist.name); prints starting artist to artistChain list
    setArtist1(startArtist); // randomly selected starter artist is saved as a variable that can be refernced along with properties of that artist
    let endArtist = targetArtist[Math.floor(Math.random() * targetArtist.length)];
    setArtist2(endArtist);
    setRelatedArtist(startArtist.ref); // sets the random starter artist to current state. This sets dropdown to related artists of randomly selected starter artist
    document.getElementById("firstChoice").style.display = "block";
    document.getElementById("label").style.display = "none";
}
};

export default StarterArtistLogic;