import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componente/home/home.component';
import { SearchComponent } from './componente/search/search.component';

const routes: Routes =
[{path:'home' , component: HomeComponent},
  {path: 'search' , component: SearchComponent},
  {path: '', pathMatch: 'full' , redirectTo:'home'},
  {path: '**' , pathMatch: 'full' , redirectTo:'home'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
