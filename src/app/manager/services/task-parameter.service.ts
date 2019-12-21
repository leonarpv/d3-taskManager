import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskParameterService {

  filterBy = '';
  states = [
    {
      id: 1,
      name: 'Planned'
    },
    {
      id: 2,
      name: 'In progress',

    },
    {
      id: 3,
      name: 'Completed',

    }
  ]
}
