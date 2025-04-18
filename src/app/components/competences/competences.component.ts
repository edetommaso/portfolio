import { Component } from '@angular/core';
import { ListCompetencesComponent } from '../list-competences/list-competences.component';
import { Competence } from '../../models/atttributs';
import { langages,frameworks,ide,os,technologies } from '../../models/competences';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [ListCompetencesComponent],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.css'
})
export class CompetencesComponent {
  languages: Competence[] = langages;
  frameworks: Competence[] = frameworks;
  ide: Competence[] = ide;
  os: Competence[] = os;
  technologies: Competence[] = technologies;
}
