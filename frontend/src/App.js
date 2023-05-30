import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { NewsList, UserProfile } from "./components";
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
import AdminSpace from "./views/AdminSpace";
import { homeToolsAtom } from "./recoil/homePageTools";
import { useRecoilValue } from "recoil";
import { allToolsAtom } from "./recoil/tool";
import ContactUs from "./views/ContactUs";
import NewDiscussion from "./components/Community/NewDiscussion";

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
  const allTools = useRecoilValue(allToolsAtom);

  const limitedTools = useRecoilValue(homeToolsAtom);

  return (
    <div>
      <Navbar />
      <Routes location={location}>
        <Route
          index
          path="/"
          element={
            <NewsContextProvider>
              <Home limitedTools={limitedTools} allTools={allTools} />
            </NewsContextProvider>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/profile/:name" element={<Profile />} />
        <Route path="/folders" element={<UserList />} />
        <Route path="/community" element={<Community />} />
        <Route path="/tooldetails/:id" element={<NewToolDetails />} />
        <Route path="/DiscussionReply" element={<DiscussionReply />} />
        <Route path="/detect" element={<MyComponent />} />
        <Route path="/AddNewsArticle" element={<AddNewsArticle />} />
        <Route path="/create-discussion" element={<NewDiscussion />} />

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
        <Route path="/AdminSpace" element={<AdminSpace />} />
        <Route path="/addTool" element={<AddTool />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/mongo" element={<GettingData />} />
        <Route path="/UserProfile/:id" element={<UserProfile />} />
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
