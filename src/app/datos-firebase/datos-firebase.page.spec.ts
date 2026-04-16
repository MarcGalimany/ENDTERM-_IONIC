import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatosFirebasePage } from './datos-firebase.page';

describe('DatosFirebasePage', () => {
  let component: DatosFirebasePage;
  let fixture: ComponentFixture<DatosFirebasePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosFirebasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
