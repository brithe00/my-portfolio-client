import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import DashboardTable from './components/DashboardTable';
import PostForm from './components/PostForm';
import Login from './components/Login';
import Home from './components/Home';

import { connect } from 'react-redux';

class App extends React.Component {

  withAuth = (Component) => {
    const { token } = this.props;
    const RedirectToLogin = () => (<Redirect to="/admin" />);
    return (token != null ? Component : RedirectToLogin);
  }

  render() {
    const { withAuth } = this;
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/admin" component={Login} />
            <Route path="/dashboard" component={withAuth(DashboardTable)} />
            <Route path="/form" component={withAuth(PostForm)} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.reducer.token,
});

export default connect(mapStateToProps)(App);
