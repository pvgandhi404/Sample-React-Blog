import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom/cjs/react-router-dom.min';
import Create from './Create';
import BlogDetails from './BlogDetails';


export default function App() {


  const link = "https://github.com/iamshaunjp/Complete-React-Tutorial"

  return (
    <Router> 
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>

            <Route exact path="/">
            <Home />
              <footer> 
                <a href={link}>Random Footnote</a>
              </footer>
            </Route>

            <Route path="/create">
              <Create />
            </Route>

            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>

          </Switch>
          </div>  
      </div>
    </Router>
  );
}

