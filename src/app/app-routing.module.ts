import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDisplayComponent } from './movie-display/components/movie-display.component';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: MovieDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
