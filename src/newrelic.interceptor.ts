import newrelic from 'newrelic';
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class NewrelicInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before ...');

    const now = Date.now();

    //return newrelic.startSegment(context.getHandler().name, false, () => {
    return next
      .handle()
      .pipe(tap(() => console.log(`After ... ${Date.now() - now}ms`)));
    //});
  }
}
