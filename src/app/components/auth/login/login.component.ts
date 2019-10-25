import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flasMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if(auth) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  onSubmit() {
    this.authService.login(this.email, this.password)
      .then(res => {
        console.log(res)
        this.flasMessage.show('You are no logged in', {
          cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['/dashboard']);
    })
    .catch( err => {
      this.flasMessage.show(err.message, {
        cssClass: 'alert-danger', timeout: 4000
      });
    });
  }

}
