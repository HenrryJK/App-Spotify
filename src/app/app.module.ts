import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './componente/home/home.component';
import { SearchComponent } from './componente/search/search.component';
import { ArtistComponent } from './componente/artist/artist.component';
import { NavbarComponent } from './componente/shared/navbar/navbar.component';
import {HttpClientModule } from '@angular/common/http';
// importando las rutas
import {ROUTES} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES , {useHash: true}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
