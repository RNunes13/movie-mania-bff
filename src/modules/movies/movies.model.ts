export interface IGenres {
  id?: number;
  name?: string;
}

export interface IProductionCompanies {
  id?: number;
  name?: string;
  logo_path?: string | null;
  origin_country?: string;
}

export interface IProductionCountries {
  iso_3166_1?: string;
  name?: string;
}

export interface ISpokenLanguages {
  iso_639_1?: string;
  name?: string;
}

export interface IMovies {
  adult?: boolean;
  backdrop_path?: string | null;
  belongs_to_collection?: null | object;
  budget?: number;
  genres?: IGenres[];
  homepage?: string | null;
  id?: number;
  imdb_id?: string | null;
  original_language?: string;
  original_title?: string;
  overview?: string | null;
  popularity?: number;
  poster_path?: string | null;
  production_companies?: IProductionCompanies[];
  production_countries?: IProductionCountries[];
  release_date?: string;
  revenue?: number;
  runtime?: number | null;
  spoken_languages?: ISpokenLanguages[];
  status?: string;
  tagline?: string | null;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export class Movies implements IMovies {
  adult?: boolean;
  backdrop_path?: string | null;
  belongs_to_collection?: null | object;
  budget?: number;
  genres?: IGenres[];
  homepage?: string | null;
  id?: number;
  imdb_id?: string | null;
  original_language?: string;
  original_title?: string;
  overview?: string | null;
  popularity?: number;
  poster_path?: string | null;
  production_companies?: IProductionCompanies[];
  production_countries?: IProductionCountries[];
  release_date?: string;
  revenue?: number;
  runtime?: number | null;
  spoken_languages?: ISpokenLanguages[];
  status?: string;
  tagline?: string | null;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}
