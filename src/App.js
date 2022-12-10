import './App.css';
import LoginForm from './loginForm';
import NavBar from './navBar';
import SignUpForm from './signUpForm';
import HomePage from './homePage';
import Upload from './upload';

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      {/* <LoginForm/>  */}
      {/* <SignUpForm/> */}
      {/* <HomePage/> */}
      <Upload/>

    </div>
  );
}

export default App;
