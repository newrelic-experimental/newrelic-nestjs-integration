// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unused-vars
const newrelic = require('newrelic');
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class CatsService {
  constructor(private http: HttpService) {}

  create(cat): any {
    //return newrelic.startSegment('getHelloService', false, () => {
    return this.http
      .post('http://child:3000/cats/create', cat)
      .pipe(
        map((response) =>
          console.log(
            `Cats Child create says ${JSON.stringify(response.data)}`,
          ),
        ),
      );
    // });
  }

  getAll(): any {
    return this.http.get('http://child:3000/cats/getAll').pipe(
      map((response) => {
        console.log(`Cats Child getAll says ${JSON.stringify(response.data)}`);
        return response.data;
      }),
    );
  }
}
