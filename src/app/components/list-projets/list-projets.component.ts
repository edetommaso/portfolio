import { Component, Input } from '@angular/core';
import { Projet } from '../../models/atttributs';
import { ListCompetencesComponent } from '../list-competences/list-competences.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-list-projets',
  standalone: true,
  imports: [ListCompetencesComponent,RouterLink, RouterLinkActive],
  templateUrl: './list-projets.component.html',
  styleUrl: './list-projets.component.css'
})
export class ListProjetsComponent {

  @Input() projets: Projet[] = [];

}
