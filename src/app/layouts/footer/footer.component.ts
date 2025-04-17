import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  
  année: number = new Date().getFullYear();
  entreprise:string = "DE TOMMASO Eric";
  info: string = `© ${this.année} ${this.entreprise}. Tous droits réservés.`;
}
