import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Items from "./pages/Items";
import Nav from "./components/Nav";
import addItem from "./pages/addItem"
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
function App() {
  return (
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
    >
        <Router>
        
      <div>
        <Nav/>
        <Switch>
          <Route exact path={["/", "/items"]}>
            <Items />
          </Route>
          <Route exact path="/addItem" component={addItem} />

          {/* <Route exact path="/items/:id">
            <Detail />
          </Route> */}
        </Switch>
      </div>
    </Router>
  </Auth0Provider>

  );
}

export default App;
