import { Component, Input } from '@angular/core';
import { Competence } from '../../models/atttributs';
import { SingleCompetenceComponent } from '../single-competences/single-competence.component';

@Component({
  selector: 'app-list-competences',
  standalone: true,
  imports: [SingleCompetenceComponent],
  templateUrl: './list-competences.component.html',
  styleUrl: './list-competences.component.css'
})
export class ListCompetencesComponent {
  
  @Input() competences: Competence[] = [];
  @Input() titre: string = "";
  
}
