import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Event from "./pages/Event";
import Subscribe from "./pages/Subscribe";

export class Routers extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Subscribe />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/lesson/:slug" element={<Event />} />
      </Routes>
    );
  }
}
