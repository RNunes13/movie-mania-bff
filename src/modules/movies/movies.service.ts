import { Inject } from '@nestjs/common';

import { ApiService } from '@modules/api/api.service';
import { IApiQuery, IResponseList } from '@modules/api/api.interface';
import { Movies } from './movies.model';
import { MoviesAdapter } from './movies.adapters';

export class MoviesService {
  constructor(
    @Inject(ApiService)
    private readonly api: ApiService,
    @Inject(MoviesAdapter)
    protected adapter: MoviesAdapter,
  ) {}

  private async getCommonList(
    path: string,
    query: IApiQuery,
  ): Promise<IResponseList<Movies>> {
    try {
      const responseMovies = (await this.api.getList(path, {
        params: query,
      })) as IResponseList<Movies>;

      return this.adapter.mountMoviesInfo(responseMovies);
    } catch (error) {
      throw error;
    }
  }

  async getMovieDetails(id: string, query: IApiQuery): Promise<Movies> {
    try {
      const responseMovies = (await this.api.get(`/movie/${id}}`, {
        params: query,
      })) as Movies;

      return responseMovies;
    } catch (error) {
      throw error;
    }
  }

  async getPopular(query: IApiQuery): Promise<IResponseList<Movies>> {
    try {
      const responseMovies = (await this.getCommonList(
        '/movie/popular',
        query,
      )) as IResponseList<Movies>;

      return this.adapter.mountMoviesInfo(responseMovies);
    } catch (error) {
      throw error;
    }
  }

  async getNowPlaying(query: IApiQuery): Promise<IResponseList<Movies>> {
    try {
      const responseMovies = (await this.getCommonList(
        '/movie/now_playing',
        query,
      )) as IResponseList<Movies>;

      return this.adapter.mountMoviesInfo(responseMovies);
    } catch (error) {
      throw error;
    }
  }

  async getTopRated(query: IApiQuery): Promise<IResponseList<Movies>> {
    try {
      const responseMovies = (await this.getCommonList(
        '/movie/top_rated',
        query,
      )) as IResponseList<Movies>;

      return this.adapter.mountMoviesInfo(responseMovies);
    } catch (error) {
      throw error;
    }
  }

  async getUpcoming(query: IApiQuery): Promise<IResponseList<Movies>> {
    try {
      const responseMovies = (await this.getCommonList(
        '/movie/upcoming',
        query,
      )) as IResponseList<Movies>;

      return this.adapter.mountMoviesInfo(responseMovies);
    } catch (error) {
      throw error;
    }
  }
}
