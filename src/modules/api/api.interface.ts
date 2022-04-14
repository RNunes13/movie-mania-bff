export interface ApiOptions {
  params?: ApiQuery;
}

export interface ApiQuery {
  language?: string;
  page?: number;
  region?: string;
}
