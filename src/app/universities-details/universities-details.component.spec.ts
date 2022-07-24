import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitiesDetailsComponent } from './universities-details.component';

describe('UniversitiesDetailsComponent', () => {
  let component: UniversitiesDetailsComponent;
  let fixture: ComponentFixture<UniversitiesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversitiesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversitiesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
