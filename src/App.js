
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Header } from './components/Home/Header/Header';
import { HomePages } from './components/PageContent/HomePages';
import { Footer } from './components/Home/Footer';

function App() {
  return (
    <>
    <Router>
        <Header />
        <Routes>
          {/* Att: Emplea Switch, está DEPRECATED, versión router-dom 6> así: */}
          <Route path='/' element={<HomePages />}/>

        </Routes>
        <Footer />
    </Router>
      
    </>
  );
}

export default App;
