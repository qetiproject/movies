import { MovieService } from 'src/app/services/movie.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesList } from 'src/app/models/MoviesList';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { Crew } from 'src/app/models/Crew';
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
  casts: Cast[];
  crews: Crew[] = [];
  trailer: boolean = false;

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
      let crews = movieCredit.crew;
      crews = crews.filter(crew => crew.job === 'Writer' || crew.job === 'Director');
      crews.forEach(c => {
        if(this.crews.find(i => i.id === c.id )) {
          this.crews.find(i => i.id === c.id ).job.push(c.job);
        } else {
          this.crews.push({
            id: c.id,
            name: c.name,
            job: [c.job]
          });
        }
      });
    });
  }
  playTrailer() {
    this.trailer = true;
  }
  close() {
    this.trailer = false;
  }
}
