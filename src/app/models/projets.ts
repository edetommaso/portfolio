import { Projet } from "./atttributs";
import  * as competences  from "./competences";

export const projets: Projet[] = [
    
    {
        nom: 'Conception d\'un jeu Tetris',
        description: [
            'Réalisation et conception d\'un jeu par groupe de 2.',
            'L\'objectif était de créer un jeu fonctionnel en Java (non orienté Objet) avec une interface utilisateur depuis le terminale.',
            'Le but est d\'obtenir le meilleur score, pour gagner des points aligner toute une ligne de bloc permettaint un gain de point puis c Le jeu s\'arrete lorsqu\'un bloc atteint le sommet du tableau.'
        ],
        technologie: [competences.java, competences.junit, competences.intellij, competences.trello],
        image: [
            '/assets/projets/1/tetris.png',
            '/assets/projets/1/tetris-1.png',
            '/assets/projets/1/tetris-2.png',
        ],
        date: 'Novembre 2023',
        duree: '2 mois',
    },
    {
        nom: 'Création d\'un site web',
        description: [
            'Conception d\'un site web à partir des besoins clients.',
            'Reprise d\'un existant à améliorer visuellement.'
        ],
        technologie: [competences.html, competences.css,competences.vscode, competences.trello],
        image: [],
        date: 'Octobre 2023',
        duree: '1 mois'
    },
    {
        nom: 'Conception d\'un jeu 2D type Zelda-like',
        description: [
            'Réalisation et conception d\'un jeu par groupe de 4.',
            'L\'objectif était de créer un jeu fonctionnel en Java (orienté Objet) avec une interface utilisateur agréable.',
            'Le but du jeu est de ne pas mourir. Explorez les environnements , équipez-vous avec des armes de différents type tels qu\'une épee ou un arc afin de combattre les monstres'+
            ' du donjon, utilisez les objets disponible permettant de soit améliorer votre personnage soit l\'affaiblir.'

        ],
        technologie: [competences.java,competences.javafx, competences.sceneBuilder, competences.tiled, competences.junit, competences.intellij, competences.trello, competences.github],
        image: [
            '/assets/projets/3/zelda.png',
            '/assets/projets/3/zelda-1.png',
            '/assets/projets/3/zelda-2.png',
        ],
        date: 'Mars 2024',
        duree: '3 mois'
    },
    {
        nom: 'Création d\'un jeu Cliker',
        description: [
            'Réalisation et conception d\'un jeu mobile par groupe de 3.',
            'L\'objectif était de créer un jeu fonctionnel en Flutter avec utilisation de base de données gérer par une liaison à une API.',
            'Le but du jeu est de cliquer sur un bouton pour gagner des points, puis de les dépenser pour acheter des améliorations.'
            +'Le jeu s\'arrête lorsque le joueur a atteint un certain nombre de points.'
        ],
        technologie: [competences.flutter, competences.mysql,competences.php, competences.vscode, competences.trello],
        image: [
            '/assets/projets/2/clicker.png',
            '/assets/projets/2/clicker-1.png',
            '/assets/projets/2/clicker-2.png',
        ],
        date: 'Fevrier 2025',
        duree: '1 mois'
    },
    
    {
        nom: 'Création d\'un site web',
        description: [
            'Conception d\'un site web à partir des besoins clients.',
            'Reprise d\'un existant à améliorer visuellement.'
        ],
        technologie: [competences.html, competences.css,competences.vscode, competences.trello],
        image: [
        
        ],
        date: 'Mars 2025',
        duree: '1 mois'
    }

];