import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { MyArrayComponent } from './my-array/my-array.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { TaskdataService } from './shared/taskdata.service';
import { AddtaskComponent } from './my-tasks/addtask.component';
import { routes } from "./shared/app.routing";
import { MyPipeComponent } from './my-pipe/my-pipe.component';
import { FilterPipe } from './shared/filter.pipe';
import { SquarePipe } from './shared/square.pipe';
import { TitleCasePipe } from './shared/title-case.pipe';
import { CollectionComponent } from './collection/collection.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';
import { CollectiondataService } from './shared/collectiondata.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SingInFormComponent } from './sing-in-form/sing-in-form.component';
import { UserComponent } from './user/user.component';
import { UserdataService } from './shared/userdata.service';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    MyArrayComponent,
    MyTasksComponent,
    HeaderMenuComponent,
    AddtaskComponent,
    MyPipeComponent,
    FilterPipe,
    SquarePipe,
    TitleCasePipe,
    CollectionComponent,
    MyCollectionComponent,
    SidebarComponent,
    SingInFormComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    ReactiveFormsModule
    
  ],
  providers: [TaskdataService,CollectiondataService,UserdataService],
  bootstrap: [AppComponent]

})
export class AppModule { }
