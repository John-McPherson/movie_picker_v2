export type StreamingService = {
  logo_path: string;
  provider_id: number;
  provider_name: string;
};

export type Genre = {
  id: number;
  name: string;
};

export interface Data {
  title: string;
  poster_path: string;
  runtime: number;
  genres: {
    id: number;
    name: string;
  }[];
  overview: string;
  id: number;
  streaming_services: {
    flatrate?: StreamingService[];
    rent?: StreamingService[];
    buy?: StreamingService[];
  };
}
