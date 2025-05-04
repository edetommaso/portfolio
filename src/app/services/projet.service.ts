import { Injectable } from '@angular/core';
import { projets } from '../models/projets';
import { Projet } from '../models/atttributs';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  
  private projets = projets;
  
  getProjets() {
    return this.projets;
  }
  
  getProjetById(id: number): Projet | undefined {
    return this.projets[id] ?? null;
  }
}
