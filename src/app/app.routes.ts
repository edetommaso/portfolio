import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProjetsPageComponent } from './pages/projets-page/projets-page.component';
import { SingleProjetComponent } from './components/single-projet/single-projet.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

export const routes: Routes = [

    { 
        path: "", component: HomePageComponent
    },
    {
        path: "projets", component: ProjetsPageComponent
    },
    {
        path: "projet/:number", component: SingleProjetComponent
    },
    {
        path: "contacts", component: ContactPageComponent
    },
    {
        path: "404", component: NotFoundPageComponent
    },
    {
        path: "**",  redirectTo: "404"
    }
];
