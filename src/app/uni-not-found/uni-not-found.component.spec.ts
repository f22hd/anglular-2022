import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniNotFoundComponent } from './uni-not-found.component';

describe('UniNotFoundComponent', () => {
  let component: UniNotFoundComponent;
  let fixture: ComponentFixture<UniNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
