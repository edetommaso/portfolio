import { Component } from '@angular/core';
import { CompetencesComponent } from "../../components/competence/competences/competences.component";
import { ProjetsComponent } from "../../components/projet/projets/projets.component";
import { ContactsComponent } from "../../components/contact/contacts/contacts.component";
import { LoisirsComponent } from "../../components/loisir/loisirs/loisirs.component";
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CompetencesComponent, ProjetsComponent, ContactsComponent, LoisirsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
