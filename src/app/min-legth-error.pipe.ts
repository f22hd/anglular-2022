import { Pipe, PipeTransform } from '@angular/core';
import { minLegthErrorType } from './app.type';

@Pipe({
  name: 'minLegthError'
})
export class MinLegthErrorPipe implements PipeTransform {

  transform({requiredLength,actualLength}:minLegthErrorType): unknown {
    return `at least ${requiredLength} characters, you entered ${actualLength}`;
  }

}
