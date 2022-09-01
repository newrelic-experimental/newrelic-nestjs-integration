// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unused-vars
import newrelic from 'newrelic';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // return newrelic.startSegment('getHelloService', false, () => {
    return 'Hello World!';
    // });
  }
}
