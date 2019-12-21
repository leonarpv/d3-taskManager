import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ITask, IState } from '../../interfaces/Task';
import { TasksService } from '../../services/tasks.service';
import { TaskParameterService } from '../../services/task-parameter.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  pageTitle = 'Edit Task';
  taskForm: FormGroup;
  task: ITask;
  errorMessage: string;
  process: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private tasksService: TasksService,
    private tasksParameter: TaskParameterService
  ) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getTask(id);
      }
    );
  }

  getTask(id: number): void {
    this.process = true;
    this.tasksService.getTask(id)
      .subscribe({
        next: task => this.onTaskRetrieved(task),
        error: err => this.errorMessage = err
      });
  }

  onTaskRetrieved(task: ITask): void {
    this.task = task;
    this.process = false;
    if (this.task.id === 0) {
      this.pageTitle = 'Add Task';
    } else {
      this.pageTitle = `Edit Task : ${this.task.name}`;
    }

    this.taskForm = this.fb.group({
      name: [this.task.name, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      description: [this.task.description, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      stateId: [this.task.stateId, [Validators.required]],
      estimate: [this.task.estimate, [Validators.required]],
      id: [this.task.id, [Validators.required]],
    });


  }

  get getStates(): IState[] {
    return this.tasksParameter.states;
  }

  saveTask(): void {

    if (this.taskForm.dirty && this.taskForm.valid) {

      if (this.task.id === 0) {
        this.task = this.taskForm.value;
        this.tasksService.createTask(this.task).subscribe((t) => {
          console.log("createTask: ", t);
        })
      } else {
        this.task = this.taskForm.value;
        this.tasksService.updateTask(this.task).subscribe((t) => {
          console.log("updateTask: ", t);
        })
      }
    }
    this.router.navigate(['/']);
  }


}
