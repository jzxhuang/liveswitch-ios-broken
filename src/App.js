import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BrokenExample from "./components/BrokenExample";
import WorkingExample from "./components/WorkingExample";
import WorkingLiveSwitch from "./components/WorkingLiveSwitch";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <h1>LiveSwitch Not Working w/ iOS Safari</h1>
        <nav>
          <ul>
            <li>
              <Link to="/broken-example">Broken Example (LiveSwitch)</Link>
            </li>
            <li>
              <Link to="/working-example">
                Working Example (Native Browser API)
              </Link>
            </li>
            <li>
              <Link to="/working-example-liveswitch">
                Working Example (LiveSwitch, with DomContentLayout (not ideal))
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/broken-example">
            <BrokenExample />
          </Route>
          <Route path="/working-example">
            <WorkingExample />
          </Route>
          <Route path="/working-example-liveswitch">
            <WorkingLiveSwitch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
