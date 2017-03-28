import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../my-tasks/task';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
arr1:Task[]=[];
arr2:Task[]=[];

  transform(arr:Task[], term: string): any {
    if (term!=''){
      this.arr1= arr.filter(res=>res.tName.toLowerCase().startsWith(term.toLowerCase()));
      this.arr2= arr.filter(res=>res.tStatus.toLowerCase().startsWith(term.toLowerCase()));
      return this.arr1.concat(this.arr2);
    }
    else{
      return this.arr1=arr;
    }
  }

}
