import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerSideRoutingComponent } from './server-side-routing.component';

describe('ServerSideRoutingComponent', () => {
  let component: ServerSideRoutingComponent;
  let fixture: ComponentFixture<ServerSideRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerSideRoutingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerSideRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
