import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { ManagerRoutingModule } from './manager-routing.module';
import { TaskComponent } from './components/task/task.component';
import { FakeApi } from './fakeApi/FakeApi';
import { TasksService } from './services/tasks.service';
import { TaskListComponent } from './components/task-list/task-list.component';



@NgModule({
  declarations: [
    TaskComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeApi),
    ManagerRoutingModule
  ],
  providers: [
    TasksService
  ]

})
export class ManagerModule { }
