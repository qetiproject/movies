import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
      AuthRoutingModule,
      FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class AuthModule { }