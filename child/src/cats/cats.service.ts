// eslint-disable-next-line @typescript-eslint/no-var-requires
const newrelic = require('newrelic');
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './schemas/cat.schema';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    // return newrelic.startSegment('getHelloService', false, () => {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
    // });
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
}
