import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './home';
import IndeedPage from './Clones/indeed';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/indeed-clone" component={IndeedPage} />
      </Switch>
    </Router>
  );
}

export default App;
