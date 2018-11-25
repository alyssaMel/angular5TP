import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  appDetails = {
    titre: 'Bibliothèque en ligne',
    tag: '1 Million de livres pour vous'
  };
}
