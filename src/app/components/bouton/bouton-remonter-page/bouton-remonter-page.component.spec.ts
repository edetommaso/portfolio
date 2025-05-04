import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonRemonterPageComponent } from './bouton-remonter-page.component';

describe('BoutonRemonterPageComponent', () => {
  let component: BoutonRemonterPageComponent;
  let fixture: ComponentFixture<BoutonRemonterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutonRemonterPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoutonRemonterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
