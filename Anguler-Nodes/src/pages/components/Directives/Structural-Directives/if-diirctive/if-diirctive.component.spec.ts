import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfDiirctiveComponent } from './if-diirctive.component';

describe('IfDiirctiveComponent', () => {
  let component: IfDiirctiveComponent;
  let fixture: ComponentFixture<IfDiirctiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfDiirctiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfDiirctiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
