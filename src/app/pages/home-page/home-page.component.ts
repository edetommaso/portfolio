import { Component } from '@angular/core';
import { CompetencesComponent } from "../../components/competences/competences.component";
import { ProjetsComponent } from "../../components/projets/projets.component";
import { ContactsComponent } from "../../components/contacts/contacts.component";
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CompetencesComponent, ProjetsComponent, ContactsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
