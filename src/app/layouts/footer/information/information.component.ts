import { Component } from '@angular/core';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {
  année: number = new Date().getFullYear();
  entreprise:string = "DE TOMMASO Eric";
  info: string = `© ${this.année} ${this.entreprise}. Tous droits réservés.`;
}
