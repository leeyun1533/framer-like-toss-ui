import React from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Item } from "./components/Item";
import { List } from "./components/List";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Store({ match }: any) {
  let { id } = match.params;

  return (
    <>
      <List />
      <AnimatePresence>
        {id && <Item id={Number(id)} key={`item-${id}`} />}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <div className="container">
      <AnimateSharedLayout type="crossfade">
        <Router>
          <Route path={["/:id", "/"]} component={Store} />
        </Router>
      </AnimateSharedLayout>
    </div>
  );
}
