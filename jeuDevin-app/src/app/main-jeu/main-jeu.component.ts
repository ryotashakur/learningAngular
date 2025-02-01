import { Component, NgModule, OnInit } from '@angular/core';
import { DevinServiceService } from '../devin-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-main-jeu',
  standalone: true,
  templateUrl: './main-jeu.component.html',
  styleUrls: ['./main-jeu.component.css'], 
  imports: [CommonModule, FormsModule]
})
export class MainJeuComponent implements OnInit {
  //on initialise les variables et on les déclare
  nombreMystere: number | null = null;
  nombreSaisi: number | null = null;
  message: string = "";
  nbTentatives: number = 6;
  finJeu: boolean = false;
  buttonText: string = "Valider";

  constructor(private devinService: DevinServiceService) {}

  ngOnInit(): void {
    this.getNewMysteryNumber();
  }

  //la on récupère le nombre mystère gràce à l"API
  getNewMysteryNumber(): void {
    this.devinService.getNombreMystere().subscribe((nombre) => {
      this.nombreMystere = nombre;
      console.log(`Nombre mystère: ${this.nombreMystere}`);
    });
  }

  // la c'est méthode pour vérifier le nombre saisi
  verifierNombre(): void {
    if (this.finJeu) {
      this.resetJeu();
      return;
    }

    // c'est la que débute la logique de l'application
    if (this.nombreSaisi === null || isNaN(this.nombreSaisi)) {
      this.message = "Veuillez saisir un nombre valide !";
      return;
    }

    if (this.nombreSaisi < 1 || this.nombreSaisi > 100) {
      this.message = "Le nombre doit être compris entre 1 et 100.";
      return;
    }

    if (this.nombreSaisi < this.nombreMystere!) {
      this.message = "Trop Petit !";
    } else if (this.nombreSaisi > this.nombreMystere!) {
      this.message = "Trop Grand !";
    } else {
      this.message = " Vous êtes fort ! Vous avez trouvé le nombre mystère.";
      this.finJeu = true;
    }

    this.nbTentatives--;

    if (this.nbTentatives <= 0 && !this.finJeu) {
      this.message = `Vous avez perdu ! Le nombre mystère était : ${this.nombreMystere}`;
      this.finJeu = true;
    }

    if (this.finJeu) {
      this.buttonText = "Recommencer";
    }
  }

  // Réinitialisation du jeu
  resetJeu(): void {
    this.nbTentatives = 6;
    this.message = '';
    this.nombreSaisi = null;
    this.finJeu = false;
    this.buttonText = 'Valider';
    this.getNewMysteryNumber();
  }
}
