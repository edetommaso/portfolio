import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  showOverlay: boolean = true;
  isPlaying: boolean = false;
  
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  
  constructor(
    private route: ActivatedRoute,
    private projetService: ProjetService
  ) {}

  ngOnInit() {
    const index = +this.route.snapshot.paramMap.get('number')!;
    this.projet = this.projetService.getProjetById(index);
  }

  toggleVideo() {
    const video = this.videoPlayer.nativeElement;
    if (video.paused) {
      video.play();
      this.isPlaying = true;
    } else {
      video.pause();
      this.isPlaying = false;
    }
  }

  onMouseOver() {
    if (!this.isPlaying) {
      this.showOverlay = true;
    }
  }

  onMouseOut() {
    if (!this.isPlaying) {
      this.showOverlay = false;
    }
  }
}