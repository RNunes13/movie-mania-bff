import { Inject } from '@nestjs/common';

import { ApiService } from '@modules/api/api.service';
import { IApiQuery } from '@modules/api/api.interface';
import { Genres } from './genres.model';

export class GenresService {
  constructor(
    @Inject(ApiService)
    private readonly api: ApiService,
  ) {}

  async getMovieGenres(query: IApiQuery): Promise<Genres[]> {
    try {
      const { genres }: { genres: Genres[] } = await this.api.get(
        '/genre/movie/list',
        { params: query },
      );

      return genres;
    } catch (error) {
      throw error;
    }
  }
}
