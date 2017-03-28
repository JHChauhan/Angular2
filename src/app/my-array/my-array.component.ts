import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-array',
  templateUrl: './my-array.component.html',
  styleUrls: ['./my-array.component.css']
})
export class MyArrayComponent implements OnInit {
flag:boolean=true;
a:number=0;
txtButton:string;
myArray:string[]=['Kirti','Jagruti','Punita'];

  constructor() { }

  ngOnInit() {

    this.txtButton="Show";
  }
  onKeyUp(num1){

    this.a=parseInt(num1);

  }
  onClick(){
    this.flag=!this.flag;
  
  if (this.flag)
  {
    this.txtButton="Show"
  }
  else
  {
    this.txtButton="Hide"
  }
  }
}
