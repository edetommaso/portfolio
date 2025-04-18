import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  titre='DE TOMMASO Eric';
  menus = [
    { label: "Accueil",route:"" },
    { label: "Projets", route:"projets" },
    { label: "Contact", route:"contacts" },
    { label: "A propos", route:"abouts" },
    { label: "CV", route:"cv" },
    { label: "Loisirs", route:"loisirs" }

  ];
}
