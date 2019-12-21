import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Tasks } from './data';
import { ITask, IState } from '../interfaces/Task';

export class FakeApi implements InMemoryDbService {
    createDb() {
        const tasks: ITask[] = Tasks.tasks;
        return { tasks };
    }
}