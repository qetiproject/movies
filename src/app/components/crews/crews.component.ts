import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';
import { Crew } from 'src/app/models/Crew';

@Component({
  selector: 'app-crews',
  templateUrl: './crews.component.html',
  styleUrls: ['./crews.component.css']
})
export class CrewsComponent implements OnInit {
  imageUrl: string = environment.movieDbApi.imageUrl;
  crews: Crew[];
  
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieCredits(id).subscribe( movieCredit => {

    //  this.castCount 
    //     ? this.casts = movieCredit.cast.slice(0, this.castCount)
    //     : this.casts = movieCredit.cast;
   
     this.crews = movieCredit.crew;
    });
  }


}
