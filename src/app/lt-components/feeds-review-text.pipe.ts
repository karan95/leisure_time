import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'feedsReviewText'
})
export class FeedsReviewTextPipe implements PipeTransform {

  transform(value: any, args?: any): any {debugger;
    if (value ) {
      // let limit = args.length > 0 ? parseInt(args[0], 50) : 50;
      let limit = 200;
      // let trail = args.length > 1 ? args[1] : '...';
      let trail = '...';
      return value.length > limit ? value.substring(0, limit) + trail : value;
    } else {
      return '';
    }
  }

}
