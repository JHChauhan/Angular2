import { Routes,RouterModule } from '@angular/router';
import { CalcComponent } from '../calc/calc.component';
import { MyArrayComponent } from '../my-array/my-array.component';
import { MyTasksComponent } from '../my-tasks/my-tasks.component';
import { AddtaskComponent } from '../my-tasks/addtask.component';
import { MyPipeComponent } from '../my-pipe/my-pipe.component';
import { MyCollectionComponent } from '../my-collection/my-collection.component';
import { SingInFormComponent } from '../sing-in-form/sing-in-form.component';
import { UserComponent } from '../user/user.component';
const router:Routes=[
    {path:'','redirectTo':'/my-tasks',pathMatch:'full'},
    {path:'my-tasks',component:MyTasksComponent},
    {path:'calc',component:CalcComponent},
    {path:'addtask',component:AddtaskComponent},
    {path:'my-array',component:MyArrayComponent},
    {path:'my-pipe',component:MyPipeComponent},
    {path:'my-collection',component:MyCollectionComponent},
    {path:'sign-in-form',component:SingInFormComponent},
    {path:'user',component:UserComponent}


];
export const routes=RouterModule.forRoot(router);