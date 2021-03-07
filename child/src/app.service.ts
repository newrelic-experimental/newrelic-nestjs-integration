// eslint-disable-next-line @typescript-eslint/no-var-requires
const newrelic = require('newrelic');
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // return newrelic.startSegment('getHelloService', false, () => {
    return 'Hello World!';
    // });
  }
}
