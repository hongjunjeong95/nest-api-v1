import { Controller, Get, Param, Post, Delete, Patch } from '@nestjs/common';

// In nest.js, if you want something, you have to ask for it

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  // Delete('/:id') 안에 있는 id와 @Param('id')에 id는 같아야 한다.
  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  // Put은 모든 리소스를 업데이트하기 때문에 필요한 부분만 업데이트 하기 위해서
  // Patch를 사용한다.
  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `This will patch a movie with the id: ${movieId}`;
  }
}
