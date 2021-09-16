import '../App.css';
import Navbar from './components/Presentational/NavBar.js'
import Header from './components/Presentational/Header.js';
import Home from './components/Presentational/Home.js';
import Rules from './components/Presentational/Rules';
import About from './components/Presentational/About.js';
import PlayScreen from './components/Presentational/PlayScreen.js';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/" className="App">
      <Route>
        <Navbar />
      </Route>
      <Route>
        <Header />
      </Route>
      <Route path='/rules'>
        <Rules />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/playScreen'>
        <PlayScreen />
      </Route>
    </Router>
  );
}

export default App;
