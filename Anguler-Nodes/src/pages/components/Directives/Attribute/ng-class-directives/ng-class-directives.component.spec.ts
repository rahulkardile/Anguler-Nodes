import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassDirectivesComponent } from './ng-class-directives.component';

describe('NgClassDirectivesComponent', () => {
  let component: NgClassDirectivesComponent;
  let fixture: ComponentFixture<NgClassDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgClassDirectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgClassDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
