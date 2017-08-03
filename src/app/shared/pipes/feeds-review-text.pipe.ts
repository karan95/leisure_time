import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'feedsReviewText'
})
export class FeedsReviewTextPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value ) {
      // let limit = args.length > 0 ? parseInt(args[0], 50) : 50;
      let limit = 200;
      if (value.length > limit) {
        // var span = document.createElement( 'span' );
        var displayContent = document.createElement( 'p' );
        var extraContent = document.createElement( 'p' );
        // let trail = args.length > 1 ? args[1] : '...';
        displayContent.innerText = value.substring(0, limit);
        extraContent.innerText =  value.substring(limit, value.length);
        // span.innerHTML = '<a>more</a>';
        let trail = ' ...';
        // return '<a click="">more</a><span>awrarawr</span>'
        return value;
      } else {
        return value;
      }
      // return value.length > limit ? value.substring(0, limit) + trail + pel : value;
    } else {
      return '';
    }
  }

}
