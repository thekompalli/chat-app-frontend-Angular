import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinPageComponent } from './getin-page.component';

describe('GetinPageComponent', () => {
  let component: GetinPageComponent;
  let fixture: ComponentFixture<GetinPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetinPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
