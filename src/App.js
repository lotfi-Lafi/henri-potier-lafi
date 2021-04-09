import Books from './component/Books';
import RecapitulePanier from './component/RecapitulePanier'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <Books />
              </Route>
              <Route exact path="/panier">
                  <RecapitulePanier />
              </Route>
          </Switch>

      </Router>
  );
}

export default App;
