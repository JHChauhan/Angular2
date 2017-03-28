import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators ,ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-sing-in-form',
  templateUrl: './sing-in-form.component.html',
  styleUrls: ['./sing-in-form.component.css']
})
export class SingInFormComponent implements OnInit {

  myLoginForm:FormGroup;
 
  constructor(private _formbuilder:FormBuilder) { }

  ngOnInit() {

    this.myLoginForm =this._formbuilder.group({
      'userName':['',[Validators.required,Validators.maxLength(8),Validators.minLength(5)]],
      'emailAddress':['',Validators.required],
      'password':['',[Validators.required,this.passwordValidator]]
    });
  }

  onSubmit(){
    console.log(this.myLoginForm);
  }

passwordValidator(_control:FormControl){


//alert(_control.value);
}

}
