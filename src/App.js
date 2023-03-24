import { Route,Routes } from 'react-router-dom';
import './App.css';
import{
    LandingPage,
    Profile,
    SignIn,
    SignUp,
    Tools
} from "./pages"
import ToolDetails from './pages/ToolDetails';

function App() {
  return (
 <Routes>
 <Route path='/' element=<LandingPage /> />
 <Route path='/signup' element=<SignUp /> />
 <Route path='/signin' element=<SignIn /> />
 <Route path='/profile' element=<Profile /> />
 <Route path='/tools' element=<Tools /> />
 <Route path='/ToolDetails/:id' element=<ToolDetails /> />
 </Routes>
  );
}

export default App;
