import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

// Pages
import { MainPage } from './pages/MainPage'
import { SelectPage } from './pages/SelectPage'
import { BranchPage } from './pages/BranchPage'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/select" component={SelectPage}/>
          <Route exact path="/branch" component={BranchPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
