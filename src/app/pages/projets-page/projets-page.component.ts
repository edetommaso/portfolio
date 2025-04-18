import { Component } from '@angular/core';
import { ProjetsComponent } from '../../components/projets/projets.component';
@Component({
  selector: 'app-projets-page',
  standalone: true,
  imports: [ProjetsComponent],
  templateUrl: './projets-page.component.html',
  styleUrl: './projets-page.component.css'
})
export class ProjetsPageComponent {

}
