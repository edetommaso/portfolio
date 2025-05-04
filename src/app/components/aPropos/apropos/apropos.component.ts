import { Component } from '@angular/core';
import { eric } from '../../../models/aPropos';
import { APropos } from '../../../models/atttributs';
import { SingleAProposComponent } from '../single-apropos/single-apropos.component';

@Component({
  selector: 'app-apropos',
  standalone: true,
  imports: [SingleAProposComponent],
  templateUrl: './apropos.component.html',
  styleUrl: './apropos.component.css'
})
export class AProposComponent {
  aPropos: APropos = eric;
  
}
