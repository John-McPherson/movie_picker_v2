import { StreamingService } from "../../Interfaces/Interfaces";
import ProviderIcon from "./ProviderIcon";

interface Props {
  title: string;
  services: StreamingService[];
}

const Provider = ({ title, services }: Props) => {
  return (
    <div>
      <h3 className="pb-3">
        <b>{title}</b>
      </h3>
      <ul className="flex gap-3">
        {services.map((service) => (
          <ProviderIcon {...service} key={service.provider_id} />
        ))}
      </ul>
    </div>
  );
};

export default Provider;
