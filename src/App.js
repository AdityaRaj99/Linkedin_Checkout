import './App.css';
import Home from './Home';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  const PrivateRoute = ({ component: Component, ...rest }) => {
    const user = JSON.parse(localStorage.getItem("user"))
    return (
      <Route
        {...rest}
        render={props => user ?
          <Component {...props} /> :
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location }
            }}
          />
        }
      />
    )

  }


  return (
    <Router>
      <div className="<MyContainer">
        <Switch>
          <PrivateRoute path="/Home" component={Home} />
          <Route path="/"> <Login /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
