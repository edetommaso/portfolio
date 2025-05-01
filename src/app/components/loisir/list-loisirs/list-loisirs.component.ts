import { Component, Input } from '@angular/core';
import { Loisir } from '../../../models/atttributs';
import { SingleLoisirComponent } from '../single-loisir/single-loisir.component';
@Component({
  selector: 'app-list-loisirs',
  standalone: true,
  imports: [SingleLoisirComponent],
  templateUrl: './list-loisirs.component.html',
  styleUrl: './list-loisirs.component.css'
})
export class ListLoisirsComponent {
 @Input() loisirs: Loisir[] = [];
}
