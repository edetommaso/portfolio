import { Component, Input } from '@angular/core';
import { Formation } from '../../../models/atttributs';

@Component({
  selector: 'app-single-formation',
  standalone: true,
  imports: [],
  templateUrl: './single-formation.component.html',
  styleUrl: './single-formation.component.css'
})
export class SingleFormationComponent {
  @Input() formation: Formation | null = null;
  
  getDatePeriode(): string {
    if (!this.formation) return '';
    const debut = this.formation.dateDebut;
    const fin = this.formation.dateFin;
    return fin ? `De ${debut} à ${fin}` : `Depuis ${debut}`;
  }
  

  getLieuPrefixe(): string {
    const etab = this.formation?.etablissement?.trim().toLowerCase() || '';
    return /^[aeiouhâêîôûéèëïüàäöœ]/.test(etab) ? "à l'" : "au ";
  }
}
