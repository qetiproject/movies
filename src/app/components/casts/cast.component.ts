import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Cast } from 'src/app/models/Cast';
import { Crew } from 'src/app/models/Crew';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {
  imageUrl: string = environment.movieDbApi.imageUrl;
  casts: Cast[];
  crews: Crew[];
  @Input() castCount: number;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieCredits(id).subscribe( movieCredit => {

     this.castCount
        ? this.casts = movieCredit.cast.slice(0, this.castCount)
        : this.casts = movieCredit.cast;
    });
  }
}
