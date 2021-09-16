import marvin from '../../../resources/marvinGaye.jpg';
import floyd from '../../../resources/pinkFloyd.jpg';
import beck from '../../../resources/beck.jpg';
import miles from '../../../resources/milesDavis.jpg';
import blondie from '../../../resources/blondie.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faStepForward } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Spotify from '../container/SpotifyAPI';

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
            <section id="icon__track-back">
                <a>{stepBackward}</a>
            </section>
            <section id="icon__question">
                <a>{questionCircle}</a>
            </section>
            <section id="icon__track-forward">
                <a>{stepForward}</a>
            </section>
            <section id="play">
                <Link to='/playScreen' id="play-button" onClick={Spotify.getAccessToken}>Play Now</Link>
            </section>
        </div>
    );
}

export default Home;


            