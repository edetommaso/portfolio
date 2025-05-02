import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProjetsPageComponent } from './pages/projets-page/projets-page.component';
import { SingleProjetComponent } from './components/projet/single-projet/single-projet.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { LoisirPageComponent } from './pages/loisir-page/loisir-page.component';
import { AProposComponent } from './components/aPropos/apropos/apropos.component';
export const routes: Routes = [

    { 
        path: "", component: HomePageComponent
    },
    {
        path: "projet", component: ProjetsPageComponent
    },
    {
        path: "projet/:number", component: SingleProjetComponent
    },
    {
        path: "contact", component: ContactPageComponent
    },
    {
        path: "loisir", component: LoisirPageComponent
    },
    {
        path: "about", component: AProposComponent
    },
    {
        path: "404", component: NotFoundPageComponent
    },
    {
        path: "**",  redirectTo: "404"
    }
];
