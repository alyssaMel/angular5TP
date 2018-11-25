import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivresComponent } from './livres/livres.component';
import { PanierComponent } from './panier/panier.component';
import { ListeLivresService } from './services/liste-livres.service';

@NgModule({
  declarations: [
    AppComponent,
    LivresComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ ListeLivresService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
