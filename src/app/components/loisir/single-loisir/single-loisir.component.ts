import { Component,Input } from '@angular/core';
import { Loisir } from '../../../models/atttributs';

@Component({
  selector: 'app-single-loisir',
  standalone: true,
  imports: [],
  templateUrl: './single-loisir.component.html',
  styleUrl: './single-loisir.component.css'
})
export class SingleLoisirComponent {
  @Input() loisir: Loisir | null = null;
}
