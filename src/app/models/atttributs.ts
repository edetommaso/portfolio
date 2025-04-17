export interface Competence {
    nom: string;
    description: string;
    image: string;
}

export interface Hobbie {
    nom: string;
    description: string;
    image: string;
}

export interface Projet {
    nom: string;
    technologie: string;
    description: string[];
    image: string[];
}

export interface Experience {
    poste: string;
    date: string;
    entreprise: string;
    localisation: string;
    description: string;
}
export interface Formation {
    nom: string;
    date: string;
    etablissement: string;
    localisation: string;
    description: string;
}

export interface Contact {
    nom: string;
    lien: string;
    image: string;
}
