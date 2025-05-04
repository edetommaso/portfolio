import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonThemeComponent } from './bouton-theme.component';

describe('BoutonThemeComponent', () => {
  let component: BoutonThemeComponent;
  let fixture: ComponentFixture<BoutonThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutonThemeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoutonThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
