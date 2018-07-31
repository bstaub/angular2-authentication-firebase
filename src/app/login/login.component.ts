import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {AlertifyService} from '../services/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router, private alertify: AlertifyService) { }

  signInWithEmail() {
    this.authService.signInRegular(this.user.email, this.user.password)
      .then((res) => {
          this.alertify.success('Login mit Email erfolgreich');
          this.router.navigate(['dashboard']);
      })
      .catch((err) => console.log('error: ' + err));

  }

  signInWithGoogle() {
        this.authService.signInWithGoogle()
            .then((res) => {
                this.alertify.success('Gmail Login erfolgreich');
                this.router.navigate(['dashboard']);
            })
            .catch((err) => console.log('error: ' + err));

  }

  ngOnInit() {
  }



}
