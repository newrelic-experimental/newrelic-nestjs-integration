import { Controller, Get } from '@nestjs/common';

import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './schemas/cat.schema';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get('create')
  create(): Promise<Cat> {
    const createCatDto: CreateCatDto = {
      name: 'Bob',
      age: 3,
      breed: 'Persian',
    };
    return this.catsService.create(createCatDto);
  }

  @Get('getAll')
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
