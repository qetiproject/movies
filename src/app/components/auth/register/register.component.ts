import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  
  registrationForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private flasMessage: FlashMessagesService
  ) { }
 
  ngOnInit() {}


  onSubmit() {
    if(this.email && this.password) {
      this.authService.register(this.email, this.password)
      .then(res => {
        console.log(res);
        this.flasMessage.show('You are now registered and lodded in', {
          cssClass: 'alert-success', timeot: 4000
        });
        this.router.navigate(['/']);
      })
      .catch( err => {
        console.log(err);
        this.flasMessage.show(err.message, {
          cssClass: 'alert-danger', timeout: 4000
        });
      });
    }
  }

}
