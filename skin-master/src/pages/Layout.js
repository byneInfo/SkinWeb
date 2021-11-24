import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import Appointment from "../components/Appointment";
import Services from "../components/Services";
import ServiceDetails from "../components/Service_details";
import Blogs from "../components/Blogs";
import BlogDetails from "../components/Blog-Details";
import About from "../components/About";
import Gallery from "../components/gallery";


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">...Loading</div>
  </div>
);
function Layout() {
  return (
    <>
      <div>
        <header>
          <Header />
        </header>
        <main className="main">
          <React.Suspense fallback={loading}>
            <Switch>
              <Route
                path="/home"
                name="Home"
                exact
                render={(props) => <Home {...props} />}
              />
              <Route
                path="/about"
                name="About"
                exact
                render={(props) => <About {...props} />}
              />
              <Route
                path="/contact"
                name="Contact"
                exact
                render={(props) => <Contact {...props} />}
              />
              <Route
                path="/gallery"
                name="Gallery"
                exact
                render={(props) => <Gallery {...props} />}
              />
              <Route
                path="/testimonials"
                name="Testimonials"
                exact
                render={(props) => <Testimonials {...props} />}
              />
              <Route
                path="/appointment"
                name="Appointment"
                exact
                render={(props) => <Appointment {...props} />}
              />
              <Route
                path="/services"
                name="Services"
                exact
                render={(props) => <Services {...props} />}
              />
              <Route
                path="/services/service-details"
                name="Service-Details"
                exact
                render={(props) => <ServiceDetails {...props} />}
              />
              <Route
                path="/blogs"
                name="Blogs"
                exact
                render={(props) => <Blogs {...props} />}
              />
              <Route
                path="/blogs/blog-details"
                name="Blog-Details"
                exact
                render={(props) => <BlogDetails {...props} />}
              />
              <Redirect from={"/"} to={"/home"} />
            </Switch>
          </React.Suspense>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Layout;
