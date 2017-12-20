import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoObjectComponent} from './todo-object/todo-object.component';
import {TodoDetailComponent} from './todo-detail/todo-detail.component';
import {TodoService} from "./todo.service";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {InMemoryDataService} from './in-memory-data.service';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";

@NgModule({
  declarations: [
    AppComponent, TodoListComponent, TodoObjectComponent, TodoDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
  ],
  providers: [
    TodoService, InMemoryDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}