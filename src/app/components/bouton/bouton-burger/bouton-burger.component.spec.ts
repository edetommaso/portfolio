import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonBurgerComponent } from './bouton-burger.component';

describe('BoutonBurgerComponent', () => {
  let component: BoutonBurgerComponent;
  let fixture: ComponentFixture<BoutonBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutonBurgerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoutonBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
