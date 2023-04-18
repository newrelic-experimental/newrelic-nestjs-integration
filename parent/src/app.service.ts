// eslint-disable-next-line @typescript-eslint/no-var-requires
const newrelic = require('newrelic');
import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private http: HttpService) {}
  getHello(): any {
    //return newrelic.startSegment('getHelloService', false, () => {
    console.log('Calling child ...');
    return this.http
      .get('http://child:3000')
      .pipe(
        map((response) => {
          console.log(`Child says ${JSON.stringify(response.data)}`);
          return response.data;
        })
      );
    // });
  }
}
