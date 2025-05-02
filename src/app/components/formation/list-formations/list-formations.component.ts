import { Component, Input } from '@angular/core';
import { Formation } from '../../../models/atttributs';
import { SingleFormationComponent } from '../single-formation/single-formation.component';
@Component({
  selector: 'app-list-formations',
  standalone: true,
  imports: [SingleFormationComponent],
  templateUrl: './list-formations.component.html',
  styleUrl: './list-formations.component.css'
})
export class ListFormationsComponent {
 @Input() formations: Formation[] = [];
}
