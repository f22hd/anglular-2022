import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';

@Pipe({
  name: 'toFormControl'
})
export class ToFormControlPipe implements PipeTransform {

  transform(obj:any): FormControl {
    return obj as FormControl;
  }

}
