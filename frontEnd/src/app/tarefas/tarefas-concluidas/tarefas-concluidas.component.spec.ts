import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasConcluidasComponent } from './tarefas-concluidas.component';

describe('TarefasConcluidasComponent', () => {
  let component: TarefasConcluidasComponent;
  let fixture: ComponentFixture<TarefasConcluidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefasConcluidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefasConcluidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
