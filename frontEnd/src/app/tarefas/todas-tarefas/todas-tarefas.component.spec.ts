import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodasTarefasComponent } from './todas-tarefas.component';

describe('TodasTarefasComponent', () => {
  let component: TodasTarefasComponent;
  let fixture: ComponentFixture<TodasTarefasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodasTarefasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodasTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
