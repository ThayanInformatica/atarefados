import { TestBed } from '@angular/core/testing';

import { TodasTarefasService } from './todas-tarefas.service';

describe('TodasTarefasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodasTarefasService = TestBed.get(TodasTarefasService);
    expect(service).toBeTruthy();
  });
});
