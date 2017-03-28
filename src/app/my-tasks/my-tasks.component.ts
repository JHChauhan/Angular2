



import { Component, OnInit } from '@angular/core';
import { Task } from "./task";
import { TaskdataService } from '../shared/taskdata.service';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})
export class MyTasksComponent implements OnInit {
listOfTask:Task[]=[];

  constructor(private _data:TaskdataService) { }
  ngOnInit() {
    this.listOfTask=this._data.displayAllData();
  }

onDelete(item:Task)
{
  this._data.deletData(item);

}


}
