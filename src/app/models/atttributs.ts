export interface Competence {
    nom: string;
    description: string;
    image: string;
}

export interface Loisir {
    nom: string;
    image: string;
}

export interface Projet {
    nom: string;
    date: string;
    duree: string;
    technologie: Competence[];
    description: string[];
    image: string[];
    video: string;
}

export interface APropos {
    nom: string;
    prenom: string;
    age: number;
    localisation: string;
    photo: string | null;
    description: string;
}

export interface Experience {
    poste: string;
    dateDebut: string;
    dateFin: string | null;
    entreprise: string;
    localisation: string;
    descriptionPoste: string;
}

export interface Formation {
    nom: string;
    dateDebut: string;
    dateFin: string | null;
    etablissement: string;
    localisation: string;
    description: string;
}

export interface Contact {
    nom: string;
    lien: string;
    image: string;
}