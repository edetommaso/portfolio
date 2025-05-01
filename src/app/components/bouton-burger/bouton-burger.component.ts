import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bouton-burger',
  standalone: true,
  imports: [],
  templateUrl: './bouton-burger.component.html',
  styleUrl: './bouton-burger.component.css'
})
export class BoutonBurgerComponent {
  @Output() toggle = new EventEmitter<void>();

  onToggleClick() {
    this.toggle.emit();
  }
}
