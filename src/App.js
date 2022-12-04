import './App.css';
import LoginForm from './loginForm';
import NavBar from './navBar';
import SignUpForm from './signUpForm';
import HomePage from './homePage';

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      {/* <LoginForm/>  */}
      {/* <SignUpForm/> */}
      <HomePage/>
    
    </div>
  );
}

export default App;
