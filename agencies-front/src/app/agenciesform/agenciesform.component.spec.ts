import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciesformComponent } from './agenciesform.component';

describe('AgenciesformComponent', () => {
  let component: AgenciesformComponent;
  let fixture: ComponentFixture<AgenciesformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenciesformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
