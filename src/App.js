import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { NameBanner } from './NameBanner';
import { NoMatch } from './NoMatch';
import { Projects } from './components/Projects';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { LinkedCards } from './components/LinkedCards';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <NameBanner />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={LinkedCards} />
              <Route path ="/projects" component={Projects} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;