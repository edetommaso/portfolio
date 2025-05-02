import { APropos } from './atttributs';
import { experiences } from './experiences';
import { formations } from './formations';

export const eric: APropos = {
    nom: "Eric",
    prenom: "De Tommaso",
    age: 22,
    localisation: "Paris",
    photo: null,
    description: "Je suis un développeur web passionné par la création d'applications web modernes et réactives. J'aime apprendre de nouvelles technologies et relever des défis techniques.",
    etudes: formations,
    experiences: experiences,
};
