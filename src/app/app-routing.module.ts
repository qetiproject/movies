import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { NowPlayingMoviesComponent } from './components/now-playing-movies/now-playing-movies.component';
import { PopularMovieComponent } from './components/popular-movie/popular-movie.component';
import { CastsCrewsComponent } from './components/casts-crews/casts-crews.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { PersonDetailInfoComponent } from './component/person-detail-info/person-detail-info.component';

const routes: Routes = [
   {path: '', component: HomeComponent},
   {path: 'dashboard', component: DashboardComponent},
   {path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(mod => mod.AuthModule)},
   {path: 'movie/nowPlaying', component: NowPlayingMoviesComponent},
   {path: 'movie/popular', component: PopularMovieComponent},
   {path: 'movie/top-rated', component: TopRatedComponent},
   {path: 'movie/:id', component: MovieComponent},
   {path: 'person/:id', component: PersonDetailInfoComponent},
   {path: 'movie/:id/castsCrews', component: CastsCrewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }