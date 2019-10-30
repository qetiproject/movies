
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NowPlayingMoviesComponent } from './components/now-playing-movies/now-playing-movies.component';


const routes: Routes = [
   {path: '', component: HomeComponent},
   {path: 'dashboard', component: DashboardComponent},
   {path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(mod => mod.AuthModule)},
   {path: 'nowPlaying', component: NowPlayingMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }