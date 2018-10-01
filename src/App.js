import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import Kinder from './kinder';
import Admin from './admin';
import './styles/style.less';

class App extends React.Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="mainWrapper">
            <header>
                <a href="#" className="logo">
                  <img src={require("./img/logo.png")} />
                </a>
            </header>
            <div className="bannerImg">
              <img src={require("./img/banner.jpg")} />
            </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/kinderfilme"  component={Kinder} />
              <Route exact path="/admin"  component={Admin} />
              <Route render={props => (<h2>404</h2>)}/>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
