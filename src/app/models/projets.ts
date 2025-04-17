import { Projet } from "./atttributs";

export const projets: Projet[] = [
    
    {
        nom: 'Conception d\'un jeu Tetris',
        description: [
            'Réalisation et conception d\'un jeu par groupe de 2.',
            'L\'objectif était de créer un jeu fonctionnel avec une interface utilisateur agréable depuis le terminale.',
            'Le jeu s\'arrete lorsqu\'un bloc atteint le sommet du tableau.'
        ],
        technologie: 'Java, Javafx, Trello',
        image: [
            '/assets/projets/1/tetris.png',
            '/assets/projets/1/tetris-1.png',
            '/assets/projets/1/tetris-2.png',
        ]
    },
    
    {
        nom: '',
        description: [
            'Développement d\'une application web pour la gestion des tâches quotidiennes.',
            'Fonctionnalités : ajout, suppression, modification de tâches, et marquage comme complètes.'
        ],
        technologie: 'Angular, Node.js, MySQL',
        image: [
            '/assets/projets/todo.png'
        ]
    }

];