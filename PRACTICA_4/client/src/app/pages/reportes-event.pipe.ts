import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reportesEvent'
})
export class ReportesEventPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
