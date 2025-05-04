import { Component } from '@angular/core';
import { LoisirsComponent } from '../../components/loisir/loisirs/loisirs.component';
@Component({
  selector: 'app-loisir-page',
  standalone: true,
  imports: [LoisirsComponent],
  templateUrl: './loisir-page.component.html',
  styleUrl: './loisir-page.component.css'
})
export class LoisirPageComponent {

}
