import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get('create')
  async create(): Promise<string> {
    return this.catsService.create();
  }

  @Get('getAll')
  async findAll(): Promise<string> {
    return this.catsService.getAll();
  }
}
