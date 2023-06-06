import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// import { NewsList, UserProfile } from "./components";
import { NewsList } from "./components";
import { Suspense, lazy, useContext } from "react";

// Importing the views
import {
  //   // Home,
  Profile,
  //   // SignIn,
  //   // SignUp,
  //   // Tools,
  //   // UserList,
  //   // Community,
  //   // DiscussionReply,
  //   // LikedTools,
  //   // NewToolDetails,
} from "./views";

// Importing the components
import { Navbar, MyComponent, UpdatePassword } from "./components";

// Importing the admin components
// import { AddTool, DataParser } from "./admin";
import LoadingHomePage from "./components/pageLoaders/LoadingHomePage";
import { DataParser } from "./admin";

// Importing the App's context
import { NewsContextProvider } from "./context/NewsContext";
import { AuthContext } from "./context/AuthContext";
import GettingData from "./GettingData";
// import AdminSpace from "./views/AdminSpace";
import { homeToolsAtom } from "./recoil/homePageTools";
import { useRecoilValue } from "recoil";
import { allToolsAtom } from "./recoil/tool";
// import ContactUs from "./views/ContactUs";
// import NewDiscussion from "./components/Community/NewDiscussion";

function App() {
  const Home = lazy(() => import("./views/Home"));
  // const Profile = lazy(() => import("./views/Profile"));
  const SignIn = lazy(() => import("./views/SignIn"));
  const SignUp = lazy(() => import("./views/SignUp"));
  const Tools = lazy(() => import("./views/Tools"));
  const Community = lazy(() => import("./views/Community"));
  const DiscussionReply = lazy(() => import("./views/DiscussionReply"));
  const LikedTools = lazy(() => import("./views/profile/LikedTools"));
  const NewToolDetails = lazy(() => import("./views/NewToolDetails"));
  const UserList = lazy(() => import("./views/profile/UserList"));
  const ContactUs = lazy(() => import("./views/ContactUs"));
  const AddNewsArticle = lazy(() => import("./admin"));
  const AddTool = lazy(() => import("./admin/Add Tool/AddTool"));
  const NewDiscussion = lazy(() =>
    import("./components/Community/NewDiscussion")
  );
  const GettingData = lazy(() => import("./GettingData"));
  const UserProfile = lazy(() =>
    import("./components/UserProfile/UserProfile")
  );
  const AdminSpace = lazy(() => import("./views/AdminSpace"));

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
              <Suspense fallback={<LoadingHomePage />}>
                <Home />
              </Suspense>
            </NewsContextProvider>
          }
        />
        <Route
          path="/signup"
          element={
            <Suspense
              fallback={
                <div className="text-[50px] text-white font-bold ">
                  Sign up Loading...
                </div>
              }
            >
              <SignUp />
            </Suspense>
          }
        />

        <Route
          path="/signin"
          element={
            <Suspense
              fallback={
                <div className="text-[50px] text-white font-bold ">
                  Sign in Loading...
                </div>
              }
            >
              <SignIn />
            </Suspense>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/contactus"
          element={
            <Suspense
              fallback={
                <div className="text-[50px] text-white font-bold ">
                  Contact us Loading...
                </div>
              }
            >
              <ContactUs />
            </Suspense>
          }
        />
        <Route
          path="/folders"
          element={
            <Suspense
              fallback={
                <div className="text-[50px] text-white font-bold ">
                  Profile Loading...
                </div>
              }
            >
              <UserList />
            </Suspense>
          }
        />
        <Route
          path="/community"
          element={
            <Suspense
              fallback={
                <div className="text-[50px] text-white font-bold ">
                  Community Loading...
                </div>
              }
            >
              <Community />
            </Suspense>
          }
        />
        <Route
          path="/tooldetails/:id/:homeTool"
          element={
            <Suspense
              fallback={
                <div className="text-[50px] text-white font-bold ">
                  Tool Loading...
                </div>
              }
            >
              <NewToolDetails />
            </Suspense>
          }
        />
        <Route
          path="/DiscussionReply"
          element={
            <Suspense
              fallback={
                <div className="text-[50px] text-white font-bold ">
                  Replies Loading...
                </div>
              }
            >
              <DiscussionReply />
            </Suspense>
          }
        />
        <Route path="/detect" element={<MyComponent />} />
        <Route
          path="/AddNewsArticle"
          element={
            <Suspense
              fallback={
                <div className="text-[50px] text-white font-bold ">
                  Adding artical page Loading...
                </div>
              }
            >
              <AddNewsArticle />
            </Suspense>
          }
        />
        <Route
          path="/create-discussion"
          element={
            <Suspense
              fallback={
                <div className="text-[50px] text-white font-bold ">
                  Create discussion page Loading...
                </div>
              }
            >
              <NewDiscussion />
            </Suspense>
          }
        />

        <Route
          path="/liked-tools"
          element={
            <Suspense
              fallback={
                <div className="text-[50px] text-white font-bold ">
                  Liked tools Loading...
                </div>
              }
            >
              <LikedTools />
            </Suspense>
          }
        />

        <Route
          path="/tools"
          element={
            <Suspense
              fallback={
                <div className="text-[50px] text-white font-bold ">
                  Tools Loading...
                </div>
              }
            >
              <ProtectedRoute>
                <Tools />
              </ProtectedRoute>{" "}
            </Suspense>
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
        <Route
          path="/AdminSpace"
          element={
            <Suspense
              fallback={
                <div className="text-[50px] text-white font-bold ">
                  Admin page Loading...
                </div>
              }
            >
              <AdminSpace />{" "}
            </Suspense>
          }
        />
        <Route
          path="/addTool"
          element={
            <Suspense
              fallback={
                <div className="text-[50px] text-white font-bold ">
                  Sign up Loading...
                </div>
              }
            >
              <AddTool />
            </Suspense>
          }
        />
        {/* <Route path="/tools" element={<Tools />} /> */}
        <Route
          path="/mongo"
          element={
            <Suspense
              fallback={
                <div className="text-[50px] text-white font-bold ">
                  Sign up Loading...
                </div>
              }>
              <GettingData />
            </Suspense>
          }
        />
        <Route
          path="/UserProfile/:id"
          element={
            <Suspense
              fallback={
                <div className="text-[50px] text-white font-bold ">
                  Sign up Loading...
                </div>
              }
            >
              <UserProfile />
            </Suspense>
          }
        />
        <Route
          path="/DataParser"
          element={
              <DataParser />
          }
        />
        <Route path="/LoadingHomePage" element={<LoadingHomePage />} />
      </Routes>
    </div>
  );
}

export default App;
