import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { CastsCrewsComponent } from './components/casts-crews/casts-crews.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { PersonDetailInfoComponent } from './components/person-detail-info/person-detail-info.component';

const routes: Routes = [
   {path: '', component: HomeComponent},
   {path: 'dashboard', component: DashboardComponent},
   {path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(mod => mod.AuthModule)},
   {path: 'movie/nowPlaying', component: MoviesComponent, },
   {path: 'movie/popular', component: MoviesComponent},
   {path: 'movie/top-rated', component: MoviesComponent},
   {path: 'movie/:id', component: MovieComponent},
   {path: 'person/:id', component: PersonDetailInfoComponent},
   {path: 'movie/:id/castsCrews', component: CastsCrewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }