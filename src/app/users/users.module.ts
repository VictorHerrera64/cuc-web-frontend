import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
