import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'contact', component: ContactComponent},
    {path: 'blog', component: BlogComponent},
   
];


/// path:"nom de la route , compoienent : ContactComponent"