import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherLoginRegisterComponent } from './teacherLoginRegister.component';

describe('SellerComponent', () => {
  let component: TeacherLoginRegisterComponent;
  let fixture: ComponentFixture<TeacherLoginRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherLoginRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherLoginRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
