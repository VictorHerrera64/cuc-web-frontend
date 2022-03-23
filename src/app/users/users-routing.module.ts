import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path:'list',
    component:ListComponent
  },
  {
    path:'create',
    component:CreateComponent
  },
  {
    path:'delete',
    component:DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
