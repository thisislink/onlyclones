import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './home';
import IndeedPage from './Components/IndeedClone/indeed';
import AllClonesPage from './Components/AllClones/clones';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/indeed-clone" component={IndeedPage} />
        <Route exact path="/all-clones" component={AllClonesPage} />
      </Switch>
    </Router>
  );
}

export default App;
