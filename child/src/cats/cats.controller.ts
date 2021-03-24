import { Controller, Get, Post, Body } from '@nestjs/common';

import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './schemas/cat.schema';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post('create')
  create(@Body() cat: CreateCatDto): Promise<Cat> {
    return this.catsService.create(cat);
  }

  @Get('getAll')
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
