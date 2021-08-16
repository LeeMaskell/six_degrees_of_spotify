import marvin from '../../resources/IMG-5993.jpg';
import floyd from '../../resources/IMG-5997.jpg';
import beck from '../../resources/IMG-5998.jpg';
import miles from '../../resources/IMG-5994.jpg';
import blondie from '../../resources/blondie.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faStepForward } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Spotify from './SpotifyAPI';

const Home = () => {
    const stepBackward = <FontAwesomeIcon icon={faStepBackward} />;
    const questionCircle = <FontAwesomeIcon icon={faQuestionCircle} />;
    const stepForward = <FontAwesomeIcon icon={faStepForward} />;
    return (
        <div id="main">
            <section id="marvin"><img src={ marvin } alt="Marvin Gaye"/></section>
            <section id="floyd"><img src={ floyd } alt="Pink Floyd"/></section>
            <section id="beck"><img src={ beck } alt="Beck"/></section>
            <section id="miles"><img src={ miles } alt="Miles Davis"/></section>
            <section id="blondie"><img src={ blondie } alt="Blondie"/></section>
            <section id="trackback">
                <a>{stepBackward}</a>
            </section>
            <section id="question">
                <a>{questionCircle}</a>
            </section>
            <section id="trackforward">
                <a>{stepForward}</a>
            </section>
            <section id="play">
                <Link to='/playScreen' id="playbutton" onClick={Spotify.getAccessToken}>Play Now</Link>
            </section>
        </div>
    );
}

export default Home;


            