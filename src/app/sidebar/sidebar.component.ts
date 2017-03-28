import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent implements OnInit {
@Input() searchCollection:string;
@Output() searched= new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
onKeyPress(value:string){
  //alert(value);
  this.searched.emit(value);
}

}
