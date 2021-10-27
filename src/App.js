import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Layout from "./pages/Layout";
import "./App.css";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const history = createBrowserHistory();
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">...Loading</div>
  </div>
);

function App() {
  return (
    <>
      <Router history={history}>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              path="/"
              name="Layout"
              exact={false}
              render={(props) => <Layout {...props} />}
            />
            <Redirect to="/" />
          </Switch>
        </React.Suspense>
      </Router>
      <ToastContainer
        position={toast.POSITION.TOP_RIGHT}
        autoClose={10000}
        hideProgressBar
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        transition={Zoom}
      />
    </>
  );
}

export default App;
