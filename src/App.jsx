import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StyledApp from './components/StyledApp/StyledApp';
import AboutMe from './components/AboutMe';
import ContactMe from './components/Contact';
import Creations from './components/Creations';
import CuriculumVitae from './components/CuriculumVitae';

function App() {
  return (
    <Router>
      <StyledApp className="App">
        <Switch>
          <Route exact path="/">
            <AboutMe />
          </Route>
          <Route path="/CuriculumVitae" component={CuriculumVitae} />
          <Route path="/ContactMe" component={ContactMe} />
          <Route path="/Creations" component={Creations} />
        </Switch>
      </StyledApp>
    </Router>
  );
}

export default App;
