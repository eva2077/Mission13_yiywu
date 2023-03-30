import React from "react";
import "./App.css";
import TopBanner from "./layout";
import MovieList from "./Movies";
function App() {
  return (
    <div className="App">
      <TopBanner />
      <MovieList />
    </div>
  );
}

export default App;
