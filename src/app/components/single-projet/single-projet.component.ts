import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projet } from '../../models/atttributs';
import { ProjetService } from '../../services/projet.service';
import { ListCompetencesComponent } from '../list-competences/list-competences.component';

@Component({
  selector: 'app-single-projet',
  standalone: true,
  imports: [ListCompetencesComponent],
  templateUrl: './single-projet.component.html',
  styleUrl: './single-projet.component.css'
})
export class SingleProjetComponent implements OnInit {
  projet: Projet | undefined = undefined;
  showOverlay: boolean = false;
  
  constructor(
    private route: ActivatedRoute,
    private projetService: ProjetService
  ) {}

  ngOnInit() {
    const index = +this.route.snapshot.paramMap.get('number')!;
    this.projet = this.projetService.getProjetById(index);
  }
}
