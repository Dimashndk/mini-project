import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import SignUpPage from './Pages/SignUpPage';
import SignInPage from './Pages/SignInPage';
// import Footer from './components/Footer/Footer';


function App() {
  return (
   <Router>
    <Routes>
      <Route path='/home' element = {<Home />} /> 
      <Route path='/sign-up-page' element = {<SignUpPage />} /> 
      <Route path='/sign-in-page' element = {<SignInPage/>} /> 
      <Route path='*' element = {<NotFound />} /> 
    </Routes>
  </Router>

  );
}

export default App;
