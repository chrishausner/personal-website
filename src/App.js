import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Home';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { ShortLinks } from './ShortLinks';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Home />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={ShortLinks} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;