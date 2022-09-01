import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { CatsController } from './cats.controller';
import { AppService } from './app.service';
import { CatsService } from './cats.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
