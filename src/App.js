import React, { Suspense } from "react";

//routing
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// import logo from './logo.svg';

//css
import "bootstrap/dist/css/bootstrap.min.css"
import "./colors.scss"
import "./App.scss"
import "./util.scss"
import "font-awesome/css/font-awesome.min.css";
import "./responsive.scss"

//utils
// import Authenitication from "./utils/Authenitication";

//commons
import Overlay from "./components/common/Overlay/Overlay";

//redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
// import { clearAllApiCalls, clearAllErrors } from "./redux/generalActions";

// import { SET_USER, SET_AUTHENTICATED } from "./redux/actions/userTypes";
// import { logOut } from "./redux/actions/userActions";

//pages
const IndexPage = React.lazy(() => import("./pages/IndexPage/IndexPage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage/AboutPage"));
const BlogPage = React.lazy(() => import("./pages/BlogPage/BlogPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage/ContactPage"));
const SingleBlogPage = React.lazy(() => import("./pages/SingleBlogPage/SingleBlogPage"));
const SignInPage = React.lazy(() => import("./pages/SignInPage/SignInPage"));
const SignUpPage = React.lazy(() => import("./pages/SignUpPage/SignUpPage"));
const ProfilePage = React.lazy(() => import("./pages/ProfilePage/ProfilePage"));


//routing and api
// import axios from "axios";
// import jwtDecode from "jwt-decode";
// axios.defaults.baseURL = "http://localhost:5000/api";

// const token = localStorage.myProjectToken;
// if (token) {
//   const decodedToken = jwtDecode(token);
//   if (decodedToken.exp * 1000 < Date.now()) {
//     store.dispatch(logOut());
//     window.location.href = "/signin-signup";
//   } else {
//     store.dispatch({ type: SET_AUTHENTICATED });
//     store.dispatch({ type: SET_USER, user: decodedToken });
//     axios.defaults.headers.common["Authorization"] = token;
//   }
// }

function Routes() {
  React.useEffect(() => {
    // store.dispatch(clearAllApiCalls());
    // store.dispatch(clearAllErrors());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <PersistGate persistor={persistor}>
          <Suspense fallback={<Overlay loading={true} />}>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/blog" component={BlogPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/single-blog" component={SingleBlogPage} />
            <Route exact path="/signin" component={SignInPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/profile" component={ProfilePage} />
            {/* <Authenitication exact path="/login-signup" component={LoginSignUpPage} /> */}
            {/* <Redirect to="/single-blog" /> */}
          </Suspense>
        </PersistGate>
      </Router>
    </Provider>
  );
}

export default Routes;
