import React from "react";
// import HelloBootstrap from "./components/HelloBootstrap"
import {HelloNavbar, HelloJumbotron, HelloCard} from "./components/HelloBootstrap"

function App() {
  // return <HelloBootstrap/>;
  return (
    <div>
      <HelloNavbar/>
      <HelloJumbotron/>
      <HelloCard/>
    </div>
  )
}

export default App;
