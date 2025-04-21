import { Component } from '@angular/core';
import { InformationComponent } from './information/information.component';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [InformationComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  
  année: number = new Date().getFullYear();
  entreprise:string = "DE TOMMASO Eric";
  info: string = `© ${this.année} ${this.entreprise}. Tous droits réservés.`;
}
