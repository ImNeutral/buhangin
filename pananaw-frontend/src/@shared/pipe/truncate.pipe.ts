import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string) : string {
    const limit = 30;
    const trail = value.length < 10 ? value : ' ...';

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }

}
