import Provider from "./Provider";
import Movie from "./Movie";
import { StreamingService, Genre } from "../../Interfaces/Interfaces";

interface Props {
  title: string;
  poster_path: string;
  overview: string;
  runtime: number;
  genres: Genre[];
  streaming_services: {
    flatrate?: StreamingService[];
    rent?: StreamingService[];
    buy?: StreamingService[];
  };
  handleClick: () => void;
}

const containerClasses = `w-full sm:aspect-2/3`;

const MovieCard = ({
  title,
  poster_path,
  overview,
  runtime,
  genres,
  streaming_services,
  handleClick,
}: Props) => {
  return (
    <section className=" bg-gray-600 text-white w-full sm:w-10/12 md:8/12 max-w-4xl flex flex-col sm:flex-row sm:rounded-3xl">
      <div className={`${containerClasses} `}>
        <Movie title={title} poster_path={poster_path} />
      </div>
      <div
        className={`${containerClasses}  flex flex-col justify-center mx-4 sm:mx-6 py-5 sm:py-0`}
      >
        <h2 className=" text-2xl font-black py-3 md:pt-0 ">{title}</h2>
        <div className="overflow-scroll h-30 sm:h-8/12 flex flex-col gap-3 ">
          <p>
            <b>Runtime:</b> {runtime} mins
          </p>
          <p>
            <b>Genre:</b>&nbsp;
            {genres.map(
              (genre, index) =>
                `${genre.name}${index != genres.length - 1 ? ", " : "."}  `
            )}
          </p>
          <p className="italic">{overview}</p>
          {streaming_services.flatrate && (
            <Provider title="Stream" services={streaming_services.flatrate} />
          )}
          {streaming_services.rent && (
            <Provider title="Rent" services={streaming_services.rent} />
          )}
          {streaming_services.buy && (
            <Provider title="Buy" services={streaming_services.buy} />
          )}
        </div>
        <button
          onClick={handleClick}
          className="mt-6 sm:mt-3 w-8/12 mx-auto bg-white hover:bg-purple-700 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-700 hover:border-transparent rounded"
        >
          Get a new Movie
        </button>
      </div>
    </section>
  );
};

export default MovieCard;
