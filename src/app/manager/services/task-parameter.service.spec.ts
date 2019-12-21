import { TestBed } from '@angular/core/testing';

import { TaskParameterService } from './task-parameter.service';

describe('TaskParameterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskParameterService = TestBed.get(TaskParameterService);
    expect(service).toBeTruthy();
  });
});
