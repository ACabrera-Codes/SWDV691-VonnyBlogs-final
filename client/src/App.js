import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, Submissions, Admin } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation 
        />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/submissions" exact component={() => <Submissions />} />
          <Route path="/admin" exact component={() => <Admin />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;