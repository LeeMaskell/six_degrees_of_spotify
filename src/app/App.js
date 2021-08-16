import '../App.css';
import Navbar from './components/NavBar.js'
import Header from './components/Header.js';
import Home from './components/Home.js';
import Rules from './components/Rules';
import About from './components/About.js';
import PlayScreen from './components/PlayScreen.js';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router className="App">
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
