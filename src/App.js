import { Route,Routes } from 'react-router-dom';
import {NewsList} from './components';

import{
    LandingPage,
    Profile,
    SignIn,
    SignUp,
    Tools
} from "./pages";

import ToolDetails from './pages/ToolDetails';
import {AddTool} from './admin';

//TODO : Adding a proper Authentification Provider to wrap it around the app

function App() {
  return (
 <Routes>
 <Route path='/' element=<LandingPage /> />
 <Route path='/signup' element=<SignUp /> />
 <Route path='/signin' element=<SignIn /> />
 <Route path='/profile' element=<Profile /> />
 <Route path='/tools' element=<Tools /> />
 <Route path='/ToolDetails/:id' element=<ToolDetails /> />
 <Route path='/News/:keyword' element=<NewsList /> />
 <Route path='/addTool' element=<AddTool /> />
 </Routes>
  );
}

export default App;
