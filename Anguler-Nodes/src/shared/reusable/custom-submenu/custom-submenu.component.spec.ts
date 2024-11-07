import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSubmenuComponent } from './custom-submenu.component';

describe('CustomSubmenuComponent', () => {
  let component: CustomSubmenuComponent;
  let fixture: ComponentFixture<CustomSubmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomSubmenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
