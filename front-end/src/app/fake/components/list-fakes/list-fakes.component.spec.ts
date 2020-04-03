import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFakesComponent } from './list-fakes.component';

describe('ListFakesComponent', () => {
  let component: ListFakesComponent;
  let fixture: ComponentFixture<ListFakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
