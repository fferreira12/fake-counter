import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFakeComponent } from './add-fake.component';

describe('AddFakeComponent', () => {
  let component: AddFakeComponent;
  let fixture: ComponentFixture<AddFakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
