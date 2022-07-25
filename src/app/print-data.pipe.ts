import { Pipe, PipeTransform } from '@angular/core';
import { University } from './app.type';

@Pipe({
  name: 'printData'
})
export class PrintDataPipe implements PipeTransform {

  transform(data: University): string {
    console.log('printData')
    return JSON.stringify(data);
  }

}
