import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserdataService } from '../shared/userdata.service';
import { User } from '../shared/user';
import { Observable } from 'rxjs/Rx';
import { AnonymousSubscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {
  allUsers: User[] = [];
  deletedUsersArray: User[] = [];

  private setIntervalSubscription: AnonymousSubscription;
  private fetchDataSubscription: AnonymousSubscription;

  constructor(private _userdata: UserdataService, private _router: Router, ) { }

  ngOnInit() {


    this.refreshData();

  }

  public ngOnDestroy(): void {
    if (this.setIntervalSubscription) {
      this.setIntervalSubscription.unsubscribe();
    }
    if (this.fetchDataSubscription) {
      this.fetchDataSubscription.unsubscribe();
    }
  }

  private getNewData() {

    this.setIntervalSubscription = Observable.timer(5000)
      .subscribe(() => this.refreshData());

  }

  private refreshData(): void {
    this.fetchDataSubscription = this._userdata.getAllUsers().subscribe(

      (data: User[]) => {
        this.allUsers = data;
        //    this.getNewData();
      },

      function (error) {
        console.log(error);
      },
      function () {
        console.log("complete");
      }

    );

  }

  selectedDelete(item: User) {

    if (this.deletedUsersArray.find(x => x == item))
      this.deletedUsersArray.splice(this.deletedUsersArray.indexOf(item, 1))
    else
      this.deletedUsersArray.push(item);

  }

  deleteAllSelected() {
    this._userdata.deleteAllSelected(this.deletedUsersArray).subscribe(
      (data: any) => {
        for (this.i = 0; this.i < this.deletedUsersArray.length; this.i++) {
          if (this.allUsers.find(x => x == this.deletedUsersArray[this.i])) {
            this.allUsers.splice(this.allUsers.indexOf(this.deletedUsersArray[this.i]), 1);
          }
        }
      }
    );
  }
  i: number = 0;



} // end of component class
