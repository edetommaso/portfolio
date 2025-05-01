import { Component } from '@angular/core';
import { ListLoisirsComponent } from '../list-loisirs/list-loisirs.component';
import { loisirs } from '../../../models/loisirs';
import { Loisir } from '../../../models/atttributs';
@Component({
  selector: 'app-loisirs',
  standalone: true,
  imports: [ListLoisirsComponent],
  templateUrl: './loisirs.component.html',
  styleUrl: './loisirs.component.css'
})
export class LoisirsComponent {
loisirs: Loisir[]= loisirs;
}
