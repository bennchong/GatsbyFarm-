import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
import Status from "../components/Status"
import NewProfile from "./newProfile";
import Dashboard from "./dashboard";
import LiveView from "./liveview";
import PlantWiki from "./plantWiki";
import Community from "./community";

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <PrivateRoute path="/app/newProfile" component={NewProfile} />
      <PrivateRoute path="/app/dashboard" component={Dashboard} />
      <PrivateRoute path="/app/liveview" component={LiveView} />
      <PrivateRoute path="/app/plantwiki" component={PlantWiki} />
      <PrivateRoute path="/app/community" component={Community} />
    {/* Dashboard, live view, plant wiki, Community  */}
    </Router>
  </Layout>
)

export default App
