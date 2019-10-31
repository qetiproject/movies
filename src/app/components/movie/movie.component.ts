import { MovieService } from 'src/app/services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesList } from 'src/app/models/MoviesList';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { MovieCredits } from 'src/app/models/MovieCredits';
import { Cast } from 'src/app/models/Cast';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movieDetail: MoviesList;
  imageUrl: string = environment.movieDbApi.imageUrl;
  youtubeUrl: string = '';
  videoUrl: any;
  movieCredit: MovieCredits;
  cast: Cast;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.youtubeUrl = this.movieService.youtubeUrl;
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id).subscribe( movie => {
      this.movieDetail = movie;
    });
    this.movieService.getVideos(id).subscribe( videoArr => {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrl + videoArr.results[0].key);
    });
    this.movieService.getMovieCredits(id).subscribe( movieCredit => {
      console.log(movieCredit)
      movieCredit.cast.forEach( casts => {
       this.cast = casts;
       console.log(this.cast)
      });
    });
  }
}
