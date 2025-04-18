import { Projet } from "./atttributs";
import  * as competences  from "./competences";

export const projets: Projet[] = [
    
    {
        nom: 'Conception d\'un jeu Tetris',
        description: [
            'Réalisation et conception d\'un jeu par groupe de 2.',
            'L\'objectif était de créer un jeu fonctionnel en Java (non orienté Objet) avec une interface utilisateur agréable depuis le terminale.',
            'Le but est d\'obtenir le meilleur score, pour gagner des points aligner toute une ligne de bloc permettaint un gain de point puis c Le jeu s\'arrete lorsqu\'un bloc atteint le sommet du tableau.'
        ],
        technologie: [competences.java, competences.trello],
        image: [
            '/assets/projets/1/tetris.png',
            '/assets/projets/1/tetris-1.png',
            '/assets/projets/1/tetris-2.png',
        ]
    },
    {
        nom: 'Création d\'un site web',
        description: [
            'Conception d’un site web à partir des besoins clients.',
            'Reprise d\'un existant à améliorer visuellement.'
        ],
        technologie: [competences.html, competences.css, competences.trello],
        image: [
            '/assets/projets/2/site.png',
            '/assets/projets/2/site-1.png',
            '/assets/projets/2/site-2.png',
        ]
    },
    {
        nom: 'cest le celebreyyy',
        description: [
            'Développement d\'une application web pour la gestion des tâches quotidiennes.',
            'Fonctionnalités : ajout, suppression, modification de tâches, et marquage comme complètes.'
        ],
        technologie: [competences.angular, competences.nodejs, competences.mongodb],
        image: [
            '/assets/projets/todo.png'
        ]
    }

];