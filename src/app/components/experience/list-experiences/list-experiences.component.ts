import { Component, Input } from '@angular/core';
import { Experience } from '../../../models/atttributs';
import { SingleExperienceComponent } from '../single-experience/single-experience.component';
@Component({
  selector: 'app-list-experiences',
  standalone: true,
  imports: [SingleExperienceComponent],
  templateUrl: './list-experiences.component.html',
  styleUrl: './list-experiences.component.css'
})
export class ListExperiencesComponent {
 @Input() experiences: Experience[] = [];
}
