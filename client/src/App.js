import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Items from "./pages/Items";
import Nav from "./components/Nav";
import addItem from "./pages/addItem"

function App() {
  return (
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

  );
}

export default App;
