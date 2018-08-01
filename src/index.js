// Packages
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import promise from "redux-promise";

// Components
import Header from "./components/header";
import PostsIndex from "./components/posts_index";

// Reducers
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div id="wrapper">
        <Header />
        <main className="container">
          <Route path="/" component={PostsIndex} />
        </main>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector("#root"));
