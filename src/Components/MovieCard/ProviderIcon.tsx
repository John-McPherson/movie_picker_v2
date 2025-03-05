interface Props {
  logo_path: string;
  provider_name: string;
}

const ProviderIcon = ({ logo_path, provider_name }: Props) => {
  return (
    <li>
      <img
        className="w-12 rounded-xl"
        src={`https://media.themoviedb.org/t/p/original${logo_path}`}
        alt={`${provider_name} logo`}
      />
    </li>
  );
};

export default ProviderIcon;
