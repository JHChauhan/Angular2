import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ans:number;

  onAdd(num1, num2)
  {
    this.ans=parseFloat(num1)+parseFloat(num2);
  }

  onSub(num1,num2)
  {
    this.ans=parseFloat(num1)-parseFloat(num2);

  }
  onMulti(num1,num2)
  {
    this.ans=parseFloat(num1)*parseFloat(num2);

  }
  onDiv(num1,num2)
    {
     if (num2==0)
      {
        alert('divisor cannot be zero');
      }
      else{
        this.ans=parseFloat(num1)/parseFloat(num2);
      }
    }

}
