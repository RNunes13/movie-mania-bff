import { Controller, Get, Query } from '@nestjs/common';
import { IApiQuery } from '@modules/api/api.interface';

import { GenresService } from './genres.service';

@Controller('genres')
export class GenresController {
  constructor(private readonly service: GenresService) {}

  @Get('movie')
  getUpcoming(@Query() query: IApiQuery) {
    return this.service.getMovieGenres(query);
  }
}
