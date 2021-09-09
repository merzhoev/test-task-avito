import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header } from './components';
import { Home, News, NotFound } from './pages';

function App() {
  return (
    <div className="clear">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/news/:id" >
            <News />
          </Route>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="*" >
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
