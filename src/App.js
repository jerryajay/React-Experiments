import './App.css';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Quiz from './Quiz';
import GoogleOrgChart from './GoogleOrgChart';
import CounterWithBackgroundColorChange from './CounterWithBackgroundColorChange';
import GitHubApiExperiment from './GitHubApiExperiment';


function App() {

  function NavBar() {
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/quiz">Quiz</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/backgroundColorChange">Color Change</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/githubApiExperiment">Github Experiment</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/googleOrgExperiment">Google Org Chart Experiment</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    );
  }

  return (
    <>
    <Router>
      
      {NavBar()}

      <Switch>
        <Route path="/quiz"> <Quiz/> </Route>
        <Route path="/backgroundColorChange"> <CounterWithBackgroundColorChange/> </Route>
        <Route path="/googleOrgExperiment"> <GoogleOrgChart/> </Route>
        <Route path="/githubApiExperiment"> <GitHubApiExperiment/> </Route>
        <Route path="/"> <Home/> </Route>
      </Switch>
   
    </Router>
    </>
  );

}

export default App;
