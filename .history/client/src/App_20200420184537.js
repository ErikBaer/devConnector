import React, {
  Fragment, useEffect
} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import './App.css';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import Routes from './components/routing/Routes';





const App = () => {
  setAuthToken(localStorage.token);
  useEffect(() => {

    store.dispatch(loadUser());
  }, []);


  return (
    <Provider store={store}>
      <Router>
        <Fragment >
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  )
}


export default App;