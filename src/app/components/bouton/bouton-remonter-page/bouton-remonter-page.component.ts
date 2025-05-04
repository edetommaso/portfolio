import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-bouton-remonter-page',
  standalone: true,
  imports: [],
  templateUrl: './bouton-remonter-page.component.html',
  styleUrl: './bouton-remonter-page.component.css'
})
export class BoutonRemonterPageComponent {
  
  isVisible = false;
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.isVisible = window.scrollY > 100;
  }
  remonterEnHaut(): void {
    const cible = document.getElementById('contenue-principal');
    if (cible) {
      cible.scrollIntoView({ behavior: 'smooth' });
    } 
  }
}
