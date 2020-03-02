import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasPendentesComponent } from './tarefas-pendentes.component';

describe('TarefasPendentesComponent', () => {
  let component: TarefasPendentesComponent;
  let fixture: ComponentFixture<TarefasPendentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefasPendentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefasPendentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
