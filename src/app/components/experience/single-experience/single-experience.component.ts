import { Component, Input } from '@angular/core';
import { Experience } from '../../../models/atttributs';

@Component({
  selector: 'app-single-experience',
  standalone: true,
  imports: [],
  templateUrl: './single-experience.component.html',
  styleUrl: './single-experience.component.css'
})
export class SingleExperienceComponent {
  @Input() experience: Experience | null = null;
  
  getDatePeriode(): string {
    if (!this.experience) return '';
    const debut = this.experience.dateDebut;
    const fin = this.experience.dateFin;
    return fin ? `De ${debut} à ${fin}` : `Depuis ${debut}`;
  }
  

  getLieuPrefixe(): string {
    const etab = this.experience?.entreprise?.trim().toLowerCase() || '';
    return /^[aeiouhâêîôûéèëïüàäöœ]/.test(etab) ? "à l'" : "au ";
  }
  
}
