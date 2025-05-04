import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoisirPageComponent } from './loisir-page.component';

describe('LoisirPageComponent', () => {
  let component: LoisirPageComponent;
  let fixture: ComponentFixture<LoisirPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoisirPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoisirPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
