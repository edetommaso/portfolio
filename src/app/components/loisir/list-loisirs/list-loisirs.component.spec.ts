import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLoisirsComponent } from './list-loisirs.component';

describe('ListLoisirsComponent', () => {
  let component: ListLoisirsComponent;
  let fixture: ComponentFixture<ListLoisirsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListLoisirsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListLoisirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
