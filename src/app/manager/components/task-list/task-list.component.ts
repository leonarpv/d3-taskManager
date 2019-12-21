import { Component, OnInit, Input } from '@angular/core';
import { ITask, IState } from '../../interfaces/Task';
import { TasksService } from '../../services/tasks.service';
import { TaskParameterService } from '../../services/task-parameter.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  pageTitle = 'Task List';
  filteredTasks: ITask[];
  tasks: ITask[];
  errorMessage: string = '';
  process: boolean = false;
  constructor(
    private tasksService: TasksService,
    private tasksParameter: TaskParameterService
  ) { }


  ngOnInit(): void {
    this.getTasks();
  }

  getSummaryClass(stateId) {
    let bgCard = '';
    switch (stateId) {
      case 1:
        bgCard = 'bg-secondary';
        break;
      case 2:
        bgCard = 'bg-success';
        break;
      case 3:
        bgCard = 'bg-info';
        break;

      default:
        bgCard = 'bg-dark';
        break;
    }
    return bgCard;
  }
  get listFilter(): string {
    return this.tasksParameter.filterBy;
  }
  set listFilter(value: string) {
    this.tasksParameter.filterBy = value;
    this.filteredTasks = this.performFilter(this.listFilter);
  }

  getTasks(): void {
    this.process = true;
    this.tasksService.getTasks()
      .subscribe({
        next: (tasks: ITask[]) => {
          this.tasks = tasks;
          this.filteredTasks = this.performFilter(this.listFilter);
          this.process = false;
        },
        error: (err) => {
          this.errorMessage = err, this.process = false
        }
      });
  }

  getSummaryHours(stateId): number {

    let tasksByStatus = this.filteredTasks.filter(task => task.stateId === stateId)

    return tasksByStatus.reduce((sum, current) => sum + current.estimate, 0);
  }
  getSummaryLength(stateId): number {

    let tasksByStatus = this.filteredTasks.filter(task => task.stateId === stateId)

    return tasksByStatus.length;
  }

  get getStates(): IState[] {
    return this.tasksParameter.states;
  }

  deleteTask(task) {

    this.tasksService.deleteTask(task).subscribe((t) => {
      console.log("Task deleted: ", t), this.getTasks();
    })

  }


  performFilter(filterBy: string): ITask[] {
    if (filterBy) {
      filterBy = filterBy.toLocaleLowerCase();
      return this.tasks.filter((task: ITask) =>
        task.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    } else {
      return this.tasks;
    }
  }




}


