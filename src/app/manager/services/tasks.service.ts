import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITask } from '../interfaces/Task';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private baseUrl = 'api';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(`${this.baseUrl}/tasks`)
  }

  getTask(idTask: number): Observable<ITask> {

    return this.http.get<ITask[]>(`${this.baseUrl}/tasks`)
      .pipe(
        map((tasks: ITask[]) => this.handleMap(tasks, idTask)),
        tap(data => console.log('Task: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
    return this.http.get<ITask>(`${this.baseUrl}/task/${idTask}`);
  }

  createTask(task: ITask) {
    task.id = null;
    return this.http.post<void>(`${this.baseUrl}/tasks`, task);

  }

  updateTask(task: ITask) {

    return this.http.put<void>(`${this.baseUrl}/tasks/${task.id}`, task);

  }

  deleteTask(task: ITask) {
    return this.http.delete<void>(`${this.baseUrl}/tasks/${task.id}`);

  }

  private handleError(err) {
    const errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    return throwError(errorMessage);
  }


  private handleMap(tasks: ITask[], id: number): ITask {

    if (id === 0) {
      return {
        id: 0,
        name: '',
        description: '',
        estimate: 0,
        stateId: null
      };
    }
    return tasks.find(m => m.id === id);
  }
}
