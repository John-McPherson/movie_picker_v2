import { useState } from "react";
import MovieCard from "./Components/MovieCard/MovieCard";
import { Data } from "./Interfaces/Interfaces";

import dummyData from "./data";

function App() {
  const [movieData, setMovieData] = useState<Data[] | null>(dummyData);
  const [activeMovie, setActiveMovie] = useState<Data | null>(dummyData[0]);

  const getMovie = () => {
    if (movieData) {
      setActiveMovie(movieData[Math.floor(Math.random() * movieData.length)]);
    }
  };
  return (
    <main className="flex h-full w-full justify-center items-center">
      {activeMovie ? (
        <MovieCard {...activeMovie} handleClick={() => getMovie()} />
      ) : (
        <p>loading</p>
      )}
    </main>
  );
}

export default App;
