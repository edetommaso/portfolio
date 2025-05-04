import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLoisirComponent } from './single-loisir.component';

describe('SingleLoisirComponent', () => {
  let component: SingleLoisirComponent;
  let fixture: ComponentFixture<SingleLoisirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleLoisirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleLoisirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
