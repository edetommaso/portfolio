import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProjetComponent } from './single-projet.component';

describe('SingleProjetComponent', () => {
  let component: SingleProjetComponent;
  let fixture: ComponentFixture<SingleProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleProjetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
