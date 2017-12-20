import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoObjectComponent } from './todo-object.component';

describe('TodoObjectComponent', () => {
  let component: TodoObjectComponent;
  let fixture: ComponentFixture<TodoObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
