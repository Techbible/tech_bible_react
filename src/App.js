import { Route,Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
 <Routes>
 <Route path='/' element=<LandingPage /> />
 <Route path='/signup' element=<SignUp /> />
 <Route path='/signin' element=<SignIn /> />
 </Routes>
  );
}

export default App;
