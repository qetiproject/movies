import { AuthService } from './services/auth.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// firemodules
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpClientModule  } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';
import { CrewsComponent } from './components/crews/crews.component';
import { CastComponent } from './components/casts/cast.component';
import { CastsCrewsComponent } from './components/casts-crews/casts-crews.component';
import { MoviesComponent } from './components/movies/movies.component';
import { PersonDetailInfoComponent } from './components/person-detail-info/person-detail-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    NotFoundComponent,
    SearchComponent,
    MovieComponent,
    CastComponent,
    CrewsComponent,
    CastsCrewsComponent,
    MoviesComponent,
    PersonDetailInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'movies'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
