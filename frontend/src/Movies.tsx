import { useState } from "react";
import data from "./MovieData.json";
import TopBanner from "./layout";
const mds = data.MovieData;
function MovieList() {
  const [listOfMovies] = useState(mds);
  //   This is for if you want to add an extra movie in corresponds to the button on the bottom of this page
  // which is also commented
  //   const [listOfMovies, setListMovies] = useState(mds);
  //   const addMovie = () => {
  //     setListMovies([
  //       ...mds,
  //       {
  //         MovieId: 6,
  //         Category: "Action/Adventure",
  //         Title: "Batman Returns",
  //         Year: 1992,
  //         Director: "Tim Burton",
  //         Rating: "PG-13",
  //       },
  //     ]);
  //   };

  return (
    <>
      <div>
        <TopBanner />
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {listOfMovies.map((m) => (
              <tr>
                {/* Can use movieID as key but in this situation there are no movieID */}
                {/* key={m.MovieId}> */}
                <td>{Math.floor(Number(m.Year))}</td>
                <td>{m.Title}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
      </div>
      {/* corresponds to the top of the page the button that adds the extra movie in as shown in video */}
      {/* <button className="btn btn-primary" onClick={addMovie}>
        Add Movies
      </button> */}
    </>
  );
}
export default MovieList;
