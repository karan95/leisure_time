import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strToArr'
})
export class StrToArrPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      var strArr = value.split(' ');
      return strArr;
    }
    return null;
  }

}
