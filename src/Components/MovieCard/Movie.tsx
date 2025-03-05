interface Props {
  title: string;
  poster_path: string;
}

const Movie = ({ poster_path, title }: Props) => {
  return (
    <img
      src={`https://www.themoviedb.org/t/p/original/${poster_path}`}
      alt={`poster for ${title}`}
      className="w-full    sm:rounded-tl-3xl sm:rounded-bl-3xl"
    />
  );
};

export default Movie;
