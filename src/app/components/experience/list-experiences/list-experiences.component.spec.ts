import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExperiencesComponent } from './list-experiences.component';

describe('ListExperiencesComponent', () => {
  let component: ListExperiencesComponent;
  let fixture: ComponentFixture<ListExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListExperiencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
