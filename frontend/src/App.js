import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { NewsList } from "./components";
import { useContext } from "react";

// Importing the views
import {
  Home,
  Profile,
  SignIn,
  SignUp,
  Tools,
  UserList,
  Community,
  DiscussionReply,
  LikedTools,
  NewToolDetails,
} from "./views";

// Importing the components
import { Navbar, MyComponent, UpdatePassword } from "./components";

// Importing the admin components
import { AddNewsArticle, AddTool, DataParser } from "./admin";

// Importing the App's context
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

  const location = useLocation();

  return (
    <div>
      <Navbar />
      <Routes location={location}>
        <Route
          index
          path="/"
          element={
            <NewsContextProvider>
              <Home />
            </NewsContextProvider>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:name" element={<Profile />} />
        <Route path="/folders" element={<UserList />} />
        <Route path="/community" element={<Community />} />
        <Route path="/newtooldetails/:id" element={<NewToolDetails />} />
        <Route path="/DiscussionReply" element={<DiscussionReply />} />
        <Route path="/detect" element={<MyComponent />} />
        <Route path="/AddNewsArticle" element={<AddNewsArticle />} />

        <Route path="/liked-tools" element={<LikedTools />} />

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

        <Route path="/addTool" element={<AddTool />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/mongo" element={<GettingData />} />
        <Route
          path="/DataParser"
          element={
            <AdminVerif>
              <DataParser />
            </AdminVerif>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
