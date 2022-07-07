import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Curriculum from './pages/Curriculum';
import Project7 from './Projects/Project7';
import Project5 from './Projects/Project5';
import Project4 from './Projects/Project4';
import Project3 from './Projects/Project3';
import Project2 from './Projects/Project2';
import Project1 from './Projects/Project1';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/curriculum">
            <Curriculum />
          </Route>
          <Route path="/Project7">
            <Project7 />
          </Route>
          <Route path="/Project5">
            <Project5 />
          </Route>
          <Route path="/Project4">
            <Project4 />
          </Route>
          <Route path="/Project3">
            <Project3 />
          </Route>
          <Route path="/Project2">
            <Project2 />
          </Route>
          <Route path="/Project1">
            <Project1 />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
