import { Component, OnInit,Input,Output} from '@angular/core';
import { CollectiondataService } from '../shared/collectiondata.service';
import { Collection } from '../shared/collection';
@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.css']
})
export class MyCollectionComponent implements OnInit {

  constructor(private _collectionData:CollectiondataService) { }
  allCollections:Collection[]=[];
  collNameToSearch:string='';
  ngOnInit() {
    
    //alert('hello');
    this._collectionData.getAllCollection().subscribe(
      (data:Collection[])=>{this.allCollections=data;
      }
     );
 }
   onKeyPressed(value:string){
    // alert (value);
    if (value!='')
    {
      this.allCollections=this.allCollections.filter((res) => res.coll_name.includes(value));
    
    }
    else
    {
      this.ngOnInit();
    }
   
   }

  
   
}
