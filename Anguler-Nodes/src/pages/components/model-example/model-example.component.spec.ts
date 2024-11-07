import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelExampleComponent } from './model-example.component';

describe('ModelExampleComponent', () => {
  let component: ModelExampleComponent;
  let fixture: ComponentFixture<ModelExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
