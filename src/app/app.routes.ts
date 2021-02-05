
import { Routes } from '@angular/router';
import { ArtistComponent } from './componente/artist/artist.component';
import { HomeComponent } from './componente/home/home.component';
import { SearchComponent } from './componente/search/search.component';



export const ROUTES: Routes = [
  {path:'home' , component:HomeComponent} ,
  {path:'search' , component:SearchComponent} ,
  {path:'artist/:id' , component:ArtistComponent} ,
  {path:'' , pathMatch:'full' , redirectTo:'home'} ,
  {path:'**' , pathMatch:'full' , redirectTo:'home'} ,
];
