import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/header";
import Home from "./pages/Home/Home";
import Moviedetail from "./pages/Moviedetail/Moviedetail";
import MovieList from "./pages/MovieList/Movielist";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Moviedetail />} />
          <Route path="/movies/:type" element={<MovieList></MovieList>} />
          <Route path="*" element={<h2>Not Found</h2>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
