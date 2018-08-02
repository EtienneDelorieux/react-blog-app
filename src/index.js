// Packages
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

// Components
import Header from "./components/header";
import PostsIndex from "./components/posts_index";
import PostsNew from "./components/posts_new";
import PostsShow from "./components/posts_show";

// Reducers
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div id="wrapper">
        <Header />
        <main className="container">
          <Switch>
            <Route path="/posts/new" component={PostsNew} />
            <Route path="/posts/:id" component={PostsShow} />
            <Route exact path="/" component={PostsIndex} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector("#root"));

// In a Switch component, put the most specific route in first position
// and the least specific route in last position
