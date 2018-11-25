import { Component, OnInit } from '@angular/core';
import { ListeLivresService } from '../services/liste-livres.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.scss']
})
export class LivresComponent implements OnInit {

  livres = [];
  isDisplayed = false;
  buttonText = 'Afficher Le résumé';

  constructor(private livresService: ListeLivresService) {
  }

  ngOnInit() {
    this.livres = this.livresService.getListeLivres();
  }

  afficherDescription(index) {
    this.isDisplayed[index] = !this.isDisplayed[index];
    this.buttonText = !this.isDisplayed[index] ? 'Afficher Le résumé' : 'Cacher le résumé';
  }

  ajouterAuPanier(livre) {
    this.livresService.ajouterLivre(livre);
  }
}
