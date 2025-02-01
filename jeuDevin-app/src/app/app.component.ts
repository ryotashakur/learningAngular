import { Component } from '@angular/core';
import { MainJeuComponent } from './main-jeu/main-jeu.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true, // Composant standalone
  imports: [MainJeuComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jeuDevin-app';
}
