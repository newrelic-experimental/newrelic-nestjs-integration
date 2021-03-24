import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post('create')
  async create(
    @Body() cat: { name: string; age: number; breed: string },
  ): Promise<string> {
    return this.catsService.create(cat);
  }

  @Get('getAll')
  async findAll(): Promise<string> {
    return this.catsService.getAll();
  }
}
