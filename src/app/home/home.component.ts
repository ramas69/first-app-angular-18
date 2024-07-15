import { Component } from '@angular/core';
import { EnteteComponent } from "../entete/entete.component";
import { VideoComponent } from '../video/video.component';
import { VisuelsComponent } from '../visuels/visuels.component';
import { AvantagesComponent } from "../avantages/avantages.component";
import { TemoignagesComponent } from "../temoignages/temoignages.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EnteteComponent, VideoComponent, VisuelsComponent, AvantagesComponent, TemoignagesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'monApp';
  h2 = " Ecommerce";
 contenu = " Application developpé en Angular et Symfony";
 img = "https://images.unsplash.com/photo-1601513445637-997d743ac760?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
}
