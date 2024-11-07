import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route404Component } from './route404.component';

describe('Route404Component', () => {
  let component: Route404Component;
  let fixture: ComponentFixture<Route404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Route404Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Route404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
