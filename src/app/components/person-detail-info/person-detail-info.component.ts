import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { PersonDetails } from '../../models/PersonDetails';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-person-detail-info',
  templateUrl: './person-detail-info.component.html',
  styleUrls: ['./person-detail-info.component.css']
})
export class PersonDetailInfoComponent implements OnInit {
  personDetails: PersonDetails;
  imageUrl: string = environment.movieDbApi.imageUrl;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getPersonDetails(id).subscribe( person => {
      this.personDetails = person;
    });
  }
}
