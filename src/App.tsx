import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteComponentProps,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './components/header';
import Home from './routes/home';
import Profile from './routes/profile';

const App: React.FC = () => {
  return (
    <div id="app">
      <Router>
        <Header />
        <Route
          render={({ location }) => {
            return (
              <TransitionGroup>
                <CSSTransition
                  timeout={6000}
                  classNames="page"
                  key={location.key}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route
                      exact
                      path="/profile/"
                      component={() => <Profile user="me" />}
                    />
                    <Route
                      path="/profile/:user"
                      component={({
                        match,
                      }: RouteComponentProps<{ user: string }>) => (
                        <Profile user={match.params.user} />
                      )}
                    />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        />
      </Router>
    </div>
  );
};

export default App;
