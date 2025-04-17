import { Component, Input } from '@angular/core';
import { Competence } from '../../models/atttributs';

@Component({
  selector: 'app-single-competence',
  standalone: true,
  imports: [],
  templateUrl: './single-competence.component.html',
  styleUrl: './single-competence.component.css'
})
export class SingleCompetenceComponent {
@Input() competence: Competence | null = null;
}
