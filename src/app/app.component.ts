import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 



boonjour(){
  console.log('test');
}




}


// SI JE SUIS MAJEUR JE PEUX VOYAGER
let age = 15;

function ager(){

if(age > 19){
  console.log("Majeur")
}else {
  console.log("Mineur")
}
}

ager();
// SINON JE NE PEUX PAS VOYAGER