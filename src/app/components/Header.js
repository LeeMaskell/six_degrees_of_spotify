import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';


const Header = () => {
    const spotify = <FontAwesomeIcon icon={faSpotify} />;
    return (
        <header className="title">
            <h1>{spotify}</h1>
            <h1>Six Degrees of <span>Spotify</span></h1>
            <h1 id="mobileTitle">6<sup>o</sup>{spotify}</h1>
        </header>
    );
}

export default Header;


