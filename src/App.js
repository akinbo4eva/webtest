import React, { useState } from "react";
import { Route,Redirect, Switch } from "react-router-dom";
import HomeView from "./View/HomeView";
import AboutView from "./View/AboutView";
import ContactUs from "./components/ContactUs";
import CareersView from "./View/CareersView";

function App() {
  const [isLabel, setIsLabel] = useState("");
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomeView isLabel={isLabel} setIsLabel={setIsLabel} />
        </Route>
        
        <Redirect path= '*' to='/' />
      </Switch>
    </>
  );
}

export default App;
