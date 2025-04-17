import { Component, Input } from '@angular/core';
import { Projet } from '../../models/atttributs';

@Component({
  selector: 'app-list-projets',
  standalone: true,
  imports: [],
  templateUrl: './list-projets.component.html',
  styleUrl: './list-projets.component.css'
})
export class ListProjetsComponent {

  @Input() projets: Projet[] = [];
  @Input() titre: string = "";

}
