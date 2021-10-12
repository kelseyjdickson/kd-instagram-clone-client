import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components /Home";
import NavBar from "./Components /NavBar";
import UploadPosts from "./Components /UploadPosts";
import Posts from './Components /Posts'
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <div className="App">
          <Route exact path="/uploads" component={UploadPosts} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/posts" component={Posts}/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
