import { Component } from '@angular/core';
import { ListCompetencesComponent } from '../list-competences/list-competences.component';
import { Competence } from '../../models/atttributs';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [ListCompetencesComponent],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.css'
})
export class CompetencesComponent {
  
  
}
