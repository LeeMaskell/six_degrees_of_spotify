const Rules = () => {
    return ( 
        <div id="rules">
            <h2 className="rulesText">The aim of the game is to navigate from a starting artist to a target artist using the associated 'related artist' 
            information provided by Spotify. Each time an artist is selected a new list of related artists is provided. You need to consider the which 
            of the related artists will change the alorithm and provide related artists that are more similar to the target artist than the starting 
            artist.<br></br><br></br>You have 6 attempts at selecting artists. The goal is to have the target artist appear in one of the related artist
            lists.
            </h2>
        </div>
     );
}
 
export default Rules;