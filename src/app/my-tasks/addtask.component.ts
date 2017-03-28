import { Component, OnInit } from '@angular/core';
import { TaskdataService } from '../shared/taskdata.service';
import { ReactiveFormsModule,FormControl,FormGroup,FormBuilder,FormsModule,Validator } from '@angular/forms';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

newStatus: string[] = [
    'done',
    'pending',
    'forworded'
  ];
  modelData = { tId:'', tName:'', tStatus: 'pending' };

  constructor(private _data: TaskdataService ) { }


  ngOnInit() {
  }

  addTaskSubmit(){
    this._data.addData(this.modelData);
    
  }
}
