import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionTypeComponent } from './connection-type.component';

describe('ConnectionTypeComponent', () => {
  let component: ConnectionTypeComponent;
  let fixture: ComponentFixture<ConnectionTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
