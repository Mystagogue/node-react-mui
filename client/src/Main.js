import React, { useState, useReducer, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useImmerReducer } from "use-immer";

// Context
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";

// Components
import Page from "./components/Page";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

function Main() {
  const initialState = {
    loggedIn: false,
    user: {
      token: null,
      username: null
    }
  };

  // In our reducer we directly mutate the DRAFT object not the state, the draft object will then replace the state pointer
  function globalReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true;
        draft.user = action.data;
        return;
      case "logout":
        draft.loggedIn = false;
        return;
    }
  }

  const [state, dispatch] = useImmerReducer(globalReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<Page loading={true} />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default Main;
