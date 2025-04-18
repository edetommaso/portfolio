import { Component } from '@angular/core';
import { projets } from '../../models/projets';
import { ListCompetencesComponent } from '../list-competences/list-competences.component';
import { ListProjetsComponent } from '../list-projets/list-projets.component';
@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [ListCompetencesComponent,ListProjetsComponent],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.css'
})
export class ProjetsComponent {

  
  projets = projets;
}
