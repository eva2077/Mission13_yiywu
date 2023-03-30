import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Welcome to GeeksforGeeks</h1>
    </div>
  );
};

export default Home;

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
