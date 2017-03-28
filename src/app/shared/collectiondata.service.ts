import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class CollectiondataService {
url:string = 'http://localhost:3000/collection/';
  constructor(private _http:Http) { }
  getAllCollection()
  {
    return this._http.get(this.url).map((res:Response)=>res.json());
  }
 addNewCollection()
 {
  
 }
}
