import { MovieCredits } from './../models/MovieCredits';
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
    personUrl = environment.movieDbApi.personUrl;
    youtubeUrl = 'https://www.youtube.com/embed/';
    constructor(private http: HttpClient ) { }

    getMovieList(page: number = 1): Observable<NowPlayingMoviesResponseModel> {
        // tslint:disable-next-line: max-line-length
        return this.http.get<NowPlayingMoviesResponseModel>(`${this.apiUrl}/now_playing?api_key=${this.apiKey}&language=en-US&page=${page}`);
    }
    getMovie(id: number): Observable<MoviesList> {
      const url = `${this.apiUrl}/${id}?api_key=${this.apiKey}&language=en-US`;
      return this.http.get<MoviesList> (url);
    }
    getVideos(id: number): Observable<any> {
      const url = `${this.apiUrl}/${id}/videos?api_key=${this.apiKey}&language=en-US`;
      return this.http.get<any> (url);
    }
    getMovieCredits(id: number): Observable<MovieCredits> {
      const url = `${this.apiUrl}/${id}/credits?api_key=${this.apiKey}&language=en-US`;
      return this.http.get<MovieCredits>(url);
    }
    // getPersonDetails(id: number): Observable<any> {
    //   const url = `${this.personUrl}/${id}?api_key=${this.apiKey}&language=en-US`;
    //   console.log(url)
    // }
}
