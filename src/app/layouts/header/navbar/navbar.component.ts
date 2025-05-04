import { Component } from '@angular/core';
import { BoutonThemeComponent } from '../../../components/bouton/bouton-theme/bouton-theme.component';
import { BoutonBurgerComponent } from '../../../components/bouton/bouton-burger/bouton-burger.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BoutonThemeComponent,BoutonBurgerComponent,RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuOuvert = false;
  
  titre='DE TOMMASO Eric';
  menus = [
    
    { label: "Accueil",route:"home" },
    { label: "À propos", route:"abouts" },
    { label: "Expériences", route:"experiences" },
    { label: "Formations", route:"formations" },
    { label: "Compétences", route:"competences" },
    { label: "Projets", route:"projets" },
    { label: "Contact", route:"contacts" },
    { label: "Loisirs", route:"loisirs" }
    
  ];
  
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}