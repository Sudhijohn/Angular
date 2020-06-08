import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let propName, filterString;
    [propName,filterString] = args;
    if(value.length === 0 || filterString === '' ) {
      return value;
    }
    const resultArray = [];
    for (const item of value){
      
      
      if(item[propName]  === filterString){
        resultArray.push(item);
      }
      
    }
    return resultArray;
    
  }

}
