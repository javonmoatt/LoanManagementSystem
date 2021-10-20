import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarCustomersComponent } from './search-bar-customers.component';

describe('SearchBarCustomersComponent', () => {
  let component: SearchBarCustomersComponent;
  let fixture: ComponentFixture<SearchBarCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
