import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginContaComponent } from './login-conta.component';

describe('LoginContaComponent', () => {
  let component: LoginContaComponent;
  let fixture: ComponentFixture<LoginContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
