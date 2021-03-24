import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { useGlobalState } from "../UIdata/statecontext";
import { ThemeProvider } from "styled-components";
import NotFound from "../App/NotFound";
import BookMark from "../bookmark/bookmark";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Login from "../log/Login";
import Signup from "../log/Signup";
import Settings from "../settings/settings";
import SpecificProduct from "../specificProducts/SpecificProduct";
import { UiColors } from "../UIdata/ui";
import { GlobalStyles } from "../../styles/common";

const App = () => {
  const {theme} = useGlobalState();

  return (
    <ThemeProvider theme={theme === 'dark' ? UiColors.dark : UiColors.light}>
      <GlobalStyles />
      <Header />
      <Route render={({ location }) => (
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route path="/specificProduct" component={SpecificProduct} />
            <Route path="/bookmarks" component={BookMark} />
            <Route path="/settings" component={Settings} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={NotFound} />
          </Switch>
        </AnimatePresence>
      )} />
    </ThemeProvider>
  )
}

export default App
