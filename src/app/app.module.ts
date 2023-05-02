import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import { RouterModule, Routes } from "@angular/router";

const router: Routes = [
  { path: "login", component: LoginComponent },
  { path: "todo-list", component: TodoListComponent },
  { path: '', redirectTo: "/login", pathMatch: "full" },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router, { enableTracing: false }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
