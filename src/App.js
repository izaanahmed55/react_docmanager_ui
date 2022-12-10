import './App.css';
import LoginForm from './loginForm';
import NavBar from './navBar';
import SignUpForm from './signUpForm';
import HomePage from './homePage';
import Upload from './upload';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/upload' element={<Upload/>}/>
      <Route path='/loginform' element={<LoginForm/>}/>
      <Route path='/signupform' element={<SignUpForm/>}/>
    </Routes>
  </BrowserRouter>
      
}

export default App;
