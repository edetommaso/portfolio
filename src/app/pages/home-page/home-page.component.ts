import { Component } from '@angular/core';
import { CompetencesComponent } from "../../components/competence/competences/competences.component";
import { ProjetsComponent } from "../../components/projet/projets/projets.component";
import { ContactsComponent } from "../../components/contact/contacts/contacts.component";
import { LoisirsComponent } from "../../components/loisir/loisirs/loisirs.component";
import { AProposComponent } from "../../components/aPropos/apropos/apropos.component";
import { ExperiencesComponent } from "../../components/experience/experiences/experiences.component";
import { FormationsComponent } from "../../components/formation/formations/formations.component";
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CompetencesComponent, ProjetsComponent, ContactsComponent, LoisirsComponent, AProposComponent, ExperiencesComponent, FormationsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
