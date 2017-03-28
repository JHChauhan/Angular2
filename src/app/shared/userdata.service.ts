import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
@Injectable()
export class UserdataService {
url : string="http://localhost:3000/user"

  constructor(private _httpUser:Http) { }
getAllUsers(){
  return  this._httpUser.get(this.url).map((res:Response)=>res.json());

} //end of getting all the Users

deleteAllSelected(item:any[])
{
  let body = JSON.stringify(item);
 
let headers = new Headers({ 'Content-Type': 'application/json' });
 
let options = new RequestOptions({ headers: headers });
return this._httpUser.post("http://localhost:3000/user1",body,options)
.map((data:Response)=>data.json());
}

}// end of services
