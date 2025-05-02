import { Component, Input } from '@angular/core';
import { APropos } from '../../../models/atttributs';

@Component({
  selector: 'app-single-apropos',
  standalone: true,
  imports: [],
  templateUrl: './single-apropos.component.html',
  styleUrl: './single-apropos.component.css'
})
export class SingleAProposComponent {

  @Input() aPropos: APropos | null = null;
}
