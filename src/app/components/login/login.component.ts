import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  username: string = '';
  password: string = '';
  isLoading = false;


  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }


  login(form: FormGroup){
    this.isLoading = true;
    this.username = form.value.email;
    this.password = form.value.password;

    this.authenticationService.login(this.username, this.password).subscribe(
      () => {
      },
      () => {
        this.isLoading = false;
      }, () => {
        this.isLoading = false;
        this.router.navigate(['/dashboard']);
      }
    );
  }
}
