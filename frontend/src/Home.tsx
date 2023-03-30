import React from "react";
import imageSrc from "./JoelHiltonHeadshot (1).jpg";

function Home() {
  return (
    <div>
      <h1>Welcome to the Joel's Website!</h1>
      <p>
        To see his list of movies goto the movies page. To check out his podcast
        goto the podcast page!
      </p>
      <div>
        <img src={imageSrc} width="400" height="320" />
      </div>
    </div>
  );
}

export default Home;
