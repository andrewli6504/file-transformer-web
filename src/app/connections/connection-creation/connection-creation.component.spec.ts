import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionCreationComponent } from './connection-creation.component';

describe('ConnectionCreationComponent', () => {
  let component: ConnectionCreationComponent;
  let fixture: ComponentFixture<ConnectionCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectionCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
