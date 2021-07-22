import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StyledApp from './components/StyledApp/StyledApp';
import GlobalStyle from './GlobalStyle';
import AboutMe from './components/AboutMe';
import ContactMe from './components/Contact';
import Creations from './components/Creations';
import CuriculumVitae from './components/CuriculumVitae';
import './reset.css';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <StyledApp className="App">
        <Switch>
          <Route exact path="/">
            <AboutMe />
          </Route>
          <Route path="/Creations" component={Creations} />
        </Switch>
        <CuriculumVitae />
        <ContactMe />
      </StyledApp>
    </Router>
  );
}

export default App;
