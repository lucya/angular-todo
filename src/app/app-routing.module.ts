import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TodoDetailComponent } from "./todo-detail/todo-detail.component";
import { TodoListComponent } from "./todo-list/todo-list.component";

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'detail/:id', component: TodoDetailComponent },
  { path: 'list', component: TodoListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
