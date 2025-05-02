import { Component } from '@angular/core';
import { ListExperiencesComponent } from '../list-experiences/list-experiences.component';
import { experiences } from '../../../models/experiences';
import { Experience } from '../../../models/atttributs';
@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [ListExperiencesComponent],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
  experiences: Experience[] = experiences;
}
