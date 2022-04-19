import { Movies } from './movies.model';
import { IResponseList } from '@modules/api/api.interface';

export class MoviesAdapter {
  mountMoviesInfo({
    page,
    results,
    total_pages,
    total_results,
  }: IResponseList<Movies>) {
    const movieData = {
      page,
      results,
      pages: total_pages,
      total: total_results,
    };

    return movieData;
  }
}
