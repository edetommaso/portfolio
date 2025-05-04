import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAProposComponent } from './single-apropos.component';

describe('SingleAProposComponent', () => {
  let component: SingleAProposComponent;
  let fixture: ComponentFixture<SingleAProposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleAProposComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleAProposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
