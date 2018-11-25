import { Component, OnInit } from '@angular/core';
import { ListeLivresService } from '../services/liste-livres.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  panier = [];

  constructor(private livresService: ListeLivresService) { }

  ngOnInit() {
    this.panier = this.livresService.getPanier();
  }


  acheter(livre) {
    this.livresService.acheterLivre(livre);
  }

}
