import React from "react";
import Search from "./Components/Search";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Movie from "./Components/Movie";
import Music from "./Components/Music";
import Ebook from "./Components/Ebook";
import Favourites from "./Components/Favourites";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <>
      

        <Routes>
          <Route path="/" exact element={<Search/>} />
          <Route path="/Movie" element={<Movie/>} />
          <Route path="/Music" element={<Music/>} />
          <Route path="/Ebook" element={<Ebook/>} />
          <Route path="/Favourites" element={<Favourites/>} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
