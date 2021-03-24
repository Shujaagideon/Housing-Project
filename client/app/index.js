import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import App from "./components/App/App";
import { GlobalProvider } from "./components/UIdata/statecontext";

// import "./styles/styles.scss";

render(
  <Router>
    <GlobalProvider>
      <App/>
    </GlobalProvider>
  </Router>,
  // eslint-disable-next-line no-undef
  document.getElementById("app")
);
