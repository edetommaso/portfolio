import { Contact } from './atttributs';

export const github: Contact = {
    nom: "Github",
    lien: "https://github.com/edetommaso/",
    image: "assets/contacts/github.png"
};

export const linkedin: Contact = {
    nom: "LinkedIn",
    lien: "https://www.linkedin.com/in/eric-de-tommaso/",
    image: "assets/contacts/linkedin.png"
};

export const email: Contact = {
    nom: "Email",
    lien: "mailto:eric.detommaso@gmail.com",
    image: "assets/contacts/email.png"
    
};

export const telephone: Contact = {
    nom: "Téléphone",
    lien: "tel:+33614292372",
    image: "assets/contacts/telephone.png"
};

export const contacts: Contact[] = [
    github,linkedin,email,telephone
];

