import { CastsCrewsComponent } from './components/casts-crews/casts-crews.component';
import { CastComponent } from './components/casts/cast.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NowPlayingMoviesComponent } from './components/now-playing-movies/now-playing-movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { CrewsComponent } from './components/crews/crews.component';

const routes: Routes = [
   {path: '', component: HomeComponent},
   {path: 'dashboard', component: DashboardComponent},
   {path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(mod => mod.AuthModule)},
   {path: 'movie/nowPlaying', component: NowPlayingMoviesComponent},
   {path: 'movie/:id', component: MovieComponent},
   {path: 'movie/:id/castsCrews', component: CastsCrewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }