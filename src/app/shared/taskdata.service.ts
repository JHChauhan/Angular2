import { Injectable } from '@angular/core';
import { Task } from '../my-tasks/task';

@Injectable()
export class TaskdataService {
listOfTask:Task[]= [
  new Task('1','Email to Manager','done'),
  new Task('2','Veryfying Stutus of Application','forworded'),
  new Task('3','push code to gitub','done')
];

 constructor() { }

    displayAllData()
    {
      return this.listOfTask;
    }
    deletData(item:Task)
    {
      this.listOfTask.splice(this.listOfTask.indexOf(item),1);
    }
    addData(item:Task)
    {
      
      this.listOfTask.push(item);

    }

}