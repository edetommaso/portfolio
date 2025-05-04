import { Component } from '@angular/core';
import { eric } from '../../../models/aPropos';
import { APropos } from '../../../models/atttributs';

import { SingleAProposComponent } from '../single-apropos/single-apropos.component';
import { ExperiencesComponent } from '../../experience/experiences/experiences.component';
import { FormationsComponent } from '../../formation/formations/formations.component';
@Component({
  selector: 'app-apropos',
  standalone: true,
  imports: [ExperiencesComponent, FormationsComponent, SingleAProposComponent],
  templateUrl: './apropos.component.html',
  styleUrl: './apropos.component.css'
})
export class AProposComponent {
  aPropos: APropos = eric;
  
}
