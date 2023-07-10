import { Component } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  title = 'Weather Login'
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(7)]);

  getErrorMessage() {
    if(this.email.hasError('required')){
      return 'E-mail Id';
    }

    return this.email.hasError('email') ? 'Not a valid email': '';
  }
  getErrorPass(){
    return this.password.hasError('minLength')? '':'enter the password';
  }
  
  hide = true;

  constructor (private router: Router)
 {
  
 
 }

 onButtonClick() 
 {
   this.router.navigate(['/dashboard']);
 };


  
}

