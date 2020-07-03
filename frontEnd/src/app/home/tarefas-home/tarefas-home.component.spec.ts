import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasHomeComponent } from './tarefas-home.component';

describe('TarefasHomeComponent', () => {
  let component: TarefasHomeComponent;
  let fixture: ComponentFixture<TarefasHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefasHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
