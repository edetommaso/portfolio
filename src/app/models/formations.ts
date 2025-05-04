import { Formation } from './atttributs';

export const bac:Formation = {
    nom: "Baccalauréat Technologique",
    dateDebut: "Septembre 2018",
    dateFin: "Juillet 2020",
    etablissement: "Lycée Louis Armand",
    localisation: "Nogent-sur-Marne",
    description: "Obtention du Baccalauréat Technologique STI2D, spécialité EE."
};

export const bts:Formation = {
    nom: "Brevet Technicien Supérieur",
    dateDebut: "Septembre 2020",
    dateFin: "Juillet 2022",
    etablissement: "Lycée Adolphe Chérioux",
    localisation: "Vitry-sur-Seine",
    description: "Obtention du BTS Electrotechnique."
};

export const but:Formation = {
    nom: "Bachelor Universitaire de Technologie",
    dateDebut: "Septembre 2022",
    dateFin: null,
    etablissement: "IUT de Montreuil",
    localisation: "Montreuil",
    description: "BUT Informatique, parcours Développement Web et Mobile."
};

export const formations: Formation[] = [
    but,bts,bac
];