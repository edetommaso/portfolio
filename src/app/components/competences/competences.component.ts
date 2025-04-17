import { Component } from '@angular/core';
import { ListCompetencesComponent } from '../list-competences/list-competences.component';
import { Competence } from '../../models/atttributs';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [ListCompetencesComponent],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.css'
})
export class CompetencesComponent {
  
  languages: Competence[] = [
    {
      nom: 'HTML',
      description: 'Langage de balisage utilisé pour créer des pages web.',
      image: '/assets/competences/html.png'
    },
    {
      nom: 'CSS',
      description: 'Langage de style utilisé pour décrire la présentation d\'un document HTML.',
      image: '/assets/competences/css.png'
    },
    {
      nom: 'JavaScript',
      description: 'Langage de programmation utilisé pour rendre les pages web interactives.',
      image: '/assets/competences/javascript.png'
    },
    {
      nom: 'Angular',
      description: 'Framework JavaScript pour construire des applications web dynamiques.',
      image: '/assets/competences/angular.ico'
    },
    {
      nom: 'Node.js',
      description: 'Environnement d\'exécution JavaScript côté serveur.',
      image: '/assets/competences/nodejs.png'
    },
    {
      nom: 'Python',
      description: 'Langage de programmation polyvalent et puissant.',
      image: '/assets/competences/python.png'
    },
    {
      nom: 'Java',
      description: 'Langage de programmation orienté objet utilisé pour le développement d\'applications.',
      image: '/assets/competences/java.png'
    },
    {
      nom: 'C',
      description: 'Langage de programmation généraliste avec des fonctionnalités orientées objet.',
      image: '/assets/competences/c.png'
    },
    {
      nom: 'PHP',
      description: 'Langage de script côté serveur principalement utilisé pour le développement web.',
      image: '/assets/competences/php.png'
    },
    {
      nom: 'MySQL',
      description: 'Langage de requête structuré utilisé pour interagir avec les bases de données.',
      image: '/assets/competences/mysql.png'
    },
    {
      nom: 'PostGreSQL',
      description: 'Langage de requête structuré utilisé pour interagir avec les bases de données.',
      image: '/assets/competences/postgresql.png'
    },
    {
      nom: 'Git',
      description: 'Système de contrôle de version distribué pour le suivi des modifications dans le code source.',
      image: '/assets/competences/git.png'
    },
    {
      nom: 'GitHub',
      description: 'Plateforme de développement collaboratif pour héberger et gérer des projets de code source.',
      image: '/assets/competences/github.png'
    },
    {
      nom: 'Docker',
      description: 'Plateforme de conteneurisation pour automatiser le déploiement d\'applications.',
      image: '/assets/competences/docker.webp'
    }, 
    {
      nom: 'Flutter',
      description: 'Framework UI pour créer des applications nativement compilées pour mobile, web et bureau à partir d\'une seule base de code.',
      image: '/assets/competences/flutter.png'
    },
    {
      nom: 'Figma',
      description: 'Outil de conception d\'interface utilisateur et de prototypage.',
      image: '/assets/competences/figma.webp'
    }
  ];
}
