import Login from './contents/login/login';
import Sigup from './contents/login/sigup';
import Content from './contents/content/content';
// import Head from './contents/ui/head';
// import Footer from './contents/ui/footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
           {/* <Head/>
           <Footer/> */}
           <Route exact path="/" element={<Login/>}></Route>
           <Route exact path='/sigup' element={<Sigup/>}></Route>
           <Route exact path='/content' element={<Content/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
