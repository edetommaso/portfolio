import { Component } from '@angular/core';
import { ListFormationsComponent } from '../list-formations/list-formations.component';
import { formations } from '../../../models/formations';
import { Formation } from '../../../models/atttributs';
@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [ListFormationsComponent],
  templateUrl: './formations.component.html',
  styleUrl: './formations.component.css'
})
export class FormationsComponent {
  formations: Formation[] = formations;
}
