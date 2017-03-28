import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pipe',
  templateUrl: './my-pipe.component.html',
  styleUrls: ['./my-pipe.component.css']
})
export class MyPipeComponent implements OnInit {


strName:string="Hello";
strOther:string="World";
testNum:number=10;
dt1=Date.now();
//dt2 = Date('05/12/2007')
a=12.356;
b=.32565;
object: Object = {prop1: 'world', prop2: 'hello', prop3: {xyz: 'look', numbers: [1,2,3,4,5]}};
  constructor() { }

  ngOnInit() {
  }

}
