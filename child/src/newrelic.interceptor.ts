import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const util = require('util');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const newrelic = require('newrelic');

@Injectable()
export class NewrelicInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(
      `Child Interceptor before: ${util.inspect(context.getHandler().name)}`,
    );
    return newrelic.startWebTransaction(context.getHandler().name, function () {
      const transaction = newrelic.getTransaction();
      // const now = Date.now();
      return next.handle().pipe(
        tap(() => {
          console.log(
            `Child Interceptor after: ${util.inspect(
              context.getHandler().name,
            )}`,
          );
          return transaction.end();
        }),
      );
    });
  }
}
