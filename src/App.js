import { Navigate, Route, Routes } from "react-router-dom";
import { NewsList } from "./components";
import { useContext } from "react";


//Importing the views
import {
  Home, Profile, SignIn,
  SignUp, Tools, UserList,
  Community, DiscussionReply,
  LikedTools, NewToolDetails
} from "./views";

//impoting the components
import { Navbar, MyComponent, UpdatePassword } from "./components";


//importing the admin components
import { AddTool, DataParser } from "./admin";

//importing the App's context
import { NewsContextProvider } from "./context/NewsContext";
import { AuthContext } from "./context/AuthContext";
import GettingData from "./GettingData";

function App() {
  const { currentUser, isAdmin } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/signin" />;
    }
    return children;
  };
  const AdminVerif = ({ children }) => {
    // if (!isAdmin) {
    //   return <Navigate to="/" />;
    // }
    return children;
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route index path="/" element={
          <NewsContextProvider>
            <Home />
          </NewsContextProvider>
        } />
        <Route path="/signup" element=<SignUp /> />
        <Route path="/signin" element=<SignIn /> />
        <Route path="/profile" element=<Profile /> />
        <Route path="/profile/:name" element=<Profile /> />
        <Route path="/folders" element=<UserList /> />
        <Route path="/community" element=<Community /> />
        <Route path="/newtooldetails/:id" element=<NewToolDetails /> />
        <Route path="/DiscussionReply" element=<DiscussionReply /> />
        <Route path="/detect" element=<MyComponent /> />

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
          path="/News"
          element={
            <NewsContextProvider>
              <NewsList />
            </NewsContextProvider>
          }
        />

        <Route
          path="/updatepassword"
          element={
            <NewsContextProvider>
              <UpdatePassword />
            </NewsContextProvider>
          }
        />

        <Route path="/addTool" element=<AddTool /> />
        <Route path="/tools" element={<Tools />} />
        <Route path="/mongo" element={<GettingData />} />
        <Route path="/DataParser" element={
          <AdminVerif>
            <DataParser />
          </AdminVerif>
        } />
      </Routes>
    </div>
  );
}
export default App;
