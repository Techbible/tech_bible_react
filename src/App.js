import { Navigate, Route, Routes } from "react-router-dom";
import { NewsList } from "./components";
import { AuthContext } from "./context/AuthContext";
import {
  Home,
  Profile,
  SignIn,
  SignUp,
  Tools,
  UserList,
  ToolDetails,
  Community,
  DiscussionReply,
  LikedTools
} from "./views";

import { AddTool } from "./admin";
import { useContext } from "react";
import { NewsContextProvider } from "./context/NewsContext";
import Navbar from "./components/Navbar/Navbar";
import NewToolDetails from "./views/NewToolDetails";
import DataParser from "./admin/Excel To Firestore/DataParser";

function App() {
  
  const { currentUser, isAdmin } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/signin" />;
    }
    return children;
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route index path="/" element=<Home /> />
        <Route path="/signup" element=<SignUp /> />
        <Route path="/signin" element=<SignIn /> />
        <Route path="/profile" element=<Profile /> />
        <Route path="/list" element=<UserList /> />
        <Route path="/community" element=<Community /> />
        <Route path="/newtooldetails/:id" element=<NewToolDetails /> />
        <Route path="/DiscussionReply" element=<DiscussionReply/> />

        <Route path="/liked-tools" element=<LikedTools /> />


        <Route
          path="/tools"
          element={
            <ProtectedRoute>
              <Tools />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ToolDetails/:id"
          element={
            <ProtectedRoute>
              <ToolDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/News"
          element={
            <NewsContextProvider>
              <NewsList />
            </NewsContextProvider>
          }
        />
        <Route path="/addTool" element=<AddTool /> />
        <Route path="/tools" element={<Tools />} />
        <Route path="/DataParser" element={<DataParser />} />
        
      </Routes>
      
    </div>
  );
}
export default App;
