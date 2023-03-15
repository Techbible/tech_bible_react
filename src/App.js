import { Route,Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';

function App() {
  return (
 <Routes>
 <Route path='/' element=<LandingPage /> />
 <Route path='/signup' element=<SignUp /> />
 <Route path='/' element=<LandingPage /> />
 </Routes>
  );
}

export default App;
