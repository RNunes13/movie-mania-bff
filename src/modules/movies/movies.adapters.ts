import { Movies } from './movies.model';
import { IResponseList } from '@modules/api/api.interface';
import { Genres } from '@modules/genres/genres.model';

export class MoviesAdapter {
  mountMoviesInfo(movies: IResponseList<Movies>, genres: Genres[]) {
    const { page, results, total_pages, total_results } = movies;

    const moviesMap = results.map(({ genre_ids, ...rest }) => ({
      ...rest,
      genres: genres.filter((genre) => genre_ids.includes(genre.id)),
    }));

    const movieData = {
      page,
      results: moviesMap,
      pages: total_pages,
      total: total_results,
    };

    return movieData;
  }
}
