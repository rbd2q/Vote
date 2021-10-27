import './App.css';
import MainPage from "./components/MainPage/MainPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import VotePage from "./components/VotePage/VotePage";
import VoteCompletedPage from './components/VotePage/VoteCompleted/VoteCompletedPage'
import VoteFailedPage from "./components/VotePage/VoteFailed/VoteFailedPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path={'/'} component={MainPage} exact/>
          <Route path={'/vote'} component={VotePage} exact/>
          <Route path={'/vote/completed'} component={VoteCompletedPage} exact/>
          <Route path={'/vote/failed'} component={VoteFailedPage} exact/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
