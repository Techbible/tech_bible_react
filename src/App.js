import { Navigate, Route, Routes } from 'react-router-dom';
import { NewsList } from './components';
import { AuthContext } from "./context/AuthContext";


import {
  LandingPage,
  Profile,
  SignIn,
  SignUp,
  Tools
} from "./pages";

import ToolDetails from './pages/ToolDetails';
import { AddTool } from './admin';
import { useContext } from 'react';


function App() {

  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/signin" />;
    }
    return children
  };

  return (
    <Routes>
      <Route path='/' element=<LandingPage /> />
      <Route path='/signup' element=<SignUp /> />
      <Route path='/signin' element=<SignIn /> />
      <Route path='/profile' element=<Profile /> />
      
      <Route path='/tools' element={
        <ProtectedRoute>
          <Tools />
        </ProtectedRoute>
      } />

      <Route path='/ToolDetails/:id' element={
        <ProtectedRoute>
          <ToolDetails />
        </ProtectedRoute>
      } />

      <Route path='/tools/ToolDetails/:id' element={
        <ProtectedRoute>
          <ToolDetails />
        </ProtectedRoute>
      } />

      <Route path='/News/:keyword' element=<NewsList /> />
      <Route path='/addTool' element=<AddTool /> />
      <Route path='/tools' element=<Tools /> />
    </Routes>
  );
}

export default App;
