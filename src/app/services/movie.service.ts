import { NowPlayingMoviesResponseModel } from './../models/NowPlayingMovies.model.';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MoviesList } from '../models/MoviesList';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
    apiUrl: string = environment.movieDbApi.apiUrl;
    apiKey = environment.movieDbApi.apiKey;
    
    constructor(private http: HttpClient ) { }

    getMovieList(page: number = 1): Observable<NowPlayingMoviesResponseModel> {
        // tslint:disable-next-line: max-line-length
        return this.http.get<NowPlayingMoviesResponseModel>(`${this.apiUrl}/now_playing?api_key=${this.apiKey}&language=en-US&page=${page}`);
    }
    // getMovies(): Observable<NowPlayingMoviesResponseModel> {
    //   return this.http.get<NowPlayingMoviesResponseModel>(`${this.apiUrl}/now_playing?api_key=${this.apiKey}&language=en-US`);
    // }
}
