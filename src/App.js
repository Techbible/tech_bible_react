import { Navigate, Route, Routes } from 'react-router-dom';
import { NewsList } from './components';
import { AuthContext } from "./context/AuthContext";


import {
  Home, Profile, SignIn, SignUp, Tools, UserList, ToolDetails
} from "./views";

import { AddTool } from './admin';
import { useContext } from 'react';
import { NewsContextProvider } from './context/NewsContext';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Socials from './components/Socials/Socials';



function App() {


  const { currentUser, isAdmin } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/signin" />;
    }
    return children;
  };


  // const CheckAdmin = ({ children }) => {
  //   console.log("from routing",isAdmin)
  //   if (!isAdmin) {
  //     return <Navigate to="/" />;
  //   }
  //   return children;
  // };



  return (
    <div>
    <Navbar />
    <Routes>
      <Route index path="/" element={
        <Home />
       }/>
      <Route path='/signup' element=<SignUp /> />
      <Route path='/signin' element=<SignIn /> />
      <Route path='/profile' element=<Profile /> />
      <Route path='/list' element=<UserList /> />

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

      <Route path='/News' element={
        <NewsContextProvider>
          <NewsList />
        </NewsContextProvider>
      } />

      <Route path='/addTool' element=<AddTool /> />

      <Route path='/tools' element={
          <Tools />
      } />
    </Routes>


    </div>
  );
}

export default App;
