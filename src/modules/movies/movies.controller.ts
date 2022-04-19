import { Controller, Get, Param, Query } from '@nestjs/common';
import { IApiQuery } from '@modules/api/api.interface';

import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly service: MoviesService) {}

  @Get(':id')
  getMovieDetails(@Param('id') id: string, @Query() query: IApiQuery) {
    return this.service.getMovieDetails(id, query);
  }

  @Get('popular')
  getPopular(@Query() query: IApiQuery) {
    return this.service.getPopular(query);
  }

  @Get('now_playing')
  getNowPlaying(@Query() query: IApiQuery) {
    return this.service.getNowPlaying(query);
  }

  @Get('top_rated')
  getTopRated(@Query() query: IApiQuery) {
    return this.service.getTopRated(query);
  }

  @Get('upcoming')
  getUpcoming(@Query() query: IApiQuery) {
    return this.service.getUpcoming(query);
  }
}
