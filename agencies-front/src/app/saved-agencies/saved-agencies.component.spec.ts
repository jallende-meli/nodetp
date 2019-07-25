import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedAgenciesComponent } from './saved-agencies.component';

describe('SavedAgenciesComponent', () => {
  let component: SavedAgenciesComponent;
  let fixture: ComponentFixture<SavedAgenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedAgenciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedAgenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
