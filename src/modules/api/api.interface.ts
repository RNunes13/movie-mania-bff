export interface IApiOptions {
  params?: IApiQuery;
}

export interface IApiQuery {
  language?: string;
  region?: string;
  page?: number;
  append_to_response?: string;
}

export interface IResponseList<T> {
  page?: number;
  results?: T[];
  total_results?: number;
  total_pages?: number;
}
