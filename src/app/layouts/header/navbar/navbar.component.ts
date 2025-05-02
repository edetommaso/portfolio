import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BoutonThemeComponent } from '../../../components/bouton-theme/bouton-theme.component';
import { BoutonBurgerComponent } from '../../../components/bouton-burger/bouton-burger.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, BoutonThemeComponent,BoutonBurgerComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuOuvert = false;

  titre='DE TOMMASO Eric';
  menus = [
    
    { label: "Accueil",route:"" },
    { label: "Projets", route:"projet" },
    { label: "Contact", route:"contact" },
    { label: "A propos", route:"about" },
    { label: "Loisirs", route:"loisir" }
    
  ];
  
  
}
