import { useState } from "react";
import MovieCard from "./Components/MovieCard/MovieCard";

const dummyData2 = {
  title: "asdf",
  poster_path: "/pFEtVPW88pWflYV84UFL0h1iJr3.jpg",
  overview:
    "A fatally ill mother with only two months to live creates a list of things she wants to do before she dies without telling her family of her illness.",
  runtime: 106,
  genres: [
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10749,
      name: "Romance",
    },
  ],
  id: 20,
  streaming_services: {
    flatrate: [
      {
        logo_path: "/pvske1MyAoymrs5bguRfVqYiM9a.jpg",
        provider_id: 9,
        provider_name: "Amazon Prime Video",
      },
      {
        logo_path: "/8aBqoNeGGr0oSA85iopgNZUOTOc.jpg",
        provider_id: 2100,
        provider_name: "Amazon Prime Video with Ads",
      },
    ],
    rent: [
      {
        logo_path: "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
        provider_id: 10,
        provider_name: "Amazon Video",
      },
    ],
    buy: [
      {
        logo_path: "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
        provider_id: 10,
        provider_name: "Amazon Video",
      },
    ],
  },
};

const dummyData = {
  title: "My Life Without Me",
  poster_path: "/pFEtVPW88pWflYV84UFL0h1iJr3.jpg",
  overview:
    "A fatally ill mother with only two months to live creates a list of things she wants to do before she dies without telling her family of her illness.",
  runtime: 106,
  genres: [
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10749,
      name: "Romance",
    },
  ],
  id: 20,
  streaming_services: {
    flatrate: [
      {
        logo_path: "/pvske1MyAoymrs5bguRfVqYiM9a.jpg",
        provider_id: 9,
        provider_name: "Amazon Prime Video",
      },
      {
        logo_path: "/8aBqoNeGGr0oSA85iopgNZUOTOc.jpg",
        provider_id: 2100,
        provider_name: "Amazon Prime Video with Ads",
      },
    ],
    rent: [
      {
        logo_path: "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
        provider_id: 10,
        provider_name: "Amazon Video",
      },
    ],
    buy: [
      {
        logo_path: "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
        provider_id: 10,
        provider_name: "Amazon Video",
      },
    ],
  },
};

function App() {
  const [activeMovie, setActiveMovie] = useState(dummyData);

  return (
    <main className="flex h-full w-full justify-center items-center">
      {activeMovie && (
        <MovieCard
          {...activeMovie}
          handleClick={() => setActiveMovie(dummyData2)}
        />
      )}
    </main>
  );
}

export default App;
