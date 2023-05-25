
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

import ProfilePage from './Pages/ProfilePage';



// import Footer from './components/Footer/Footer';


function App() {
  return (
   <Router>
    <Routes>
      <Route path='/home' element = {<Home />} /> 
      <Route path='/profile-page' element = {<ProfilePage/>} /> 
      <Route path='*' element = {<NotFound />} /> 
      <Route path='/post'>
      <Route path=':postId' element={<ProfilePage/>}/>
      </Route>
    </Routes>
  </Router>

  );

  
}

export default App;
