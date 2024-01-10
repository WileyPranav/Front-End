
import Home from "./newComponents/Home";
import Navbar from "./newComponents/Navbar";
import ShowArticles from "./newComponents/ShowArticles";
import { BrowserRouter as Router,Route,Routes as Switch } from "react-router-dom";
import CreateArticle from './newComponents/CreateArticle'
import ShowReports from "./newComponents/ShowReports";
function App() {
  return (<Router>
          <div className="App">
            <Navbar/>
            <div className='content'> 
            <Switch>
              <Route exact path='/' element={<Home/>}/>
              <Route path='/Articles'element={<ShowArticles/>}/>
              <Route path='/CreateArticle' element={<CreateArticle/>}/>
              <Route path='/Reports' element={<ShowReports/>}/>
            </Switch>
            </div>
        </div>
        </Router>  );
}

export default App;
