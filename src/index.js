// Packages
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";

// Components
import Header from "./components/header";
import PostsIndex from "./components/posts_index";

// Reducers
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div id="wrapper">
        <Header />
        <main className="container">
        </main>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector("#root"));
