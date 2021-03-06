const clientId = '5cad4d3bde5f483e94d38253735b91b1';
const redirectUri = 'http://localhost:3000/playScreen';
let accessToken = '';

const Spotify = {
    hasAccessToken() {
        return accessToken.length > 0;
    },
    getAccessToken() {
        if (accessToken.length > 0) {
            return accessToken;
        }
        //check for an access token match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        console.log(accessTokenMatch, expiresInMatch);
        console.log('has access token');
        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            //This is going to clear the parameters, allowing us to grab a new access token on expiry
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }
    },
    getRelatedArtists(artistId) { // returns a promise
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/artists/${artistId}/related-artists`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }).then(response => { // first thing to be done with the promise
                return response.json();
            }).then(jsonResponse => { // second thing to be done with the promise
                return jsonResponse.artists.map(relatedArtist => ({ // return the data in an object that resembles the starterArtists objects
                    name: relatedArtist.name,
                    ref: relatedArtist.id,
                    image: relatedArtist.images.length > 0 ? relatedArtist.images[0].url : "" // fill empty string with default image
                }));
            });
    },
}



export default Spotify;

