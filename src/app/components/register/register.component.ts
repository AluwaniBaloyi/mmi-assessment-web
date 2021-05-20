import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {Register} from "../../model/User";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  imgFile: string = '../../assets/images/profile-picture.png';
  isLoading = false;
  registerUser: Register = <Register>{};

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      file: new FormControl('', [Validators.required]),
      imgSrc: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  Registration(form: FormGroup){
    this.registerUser.username = form.value.email;
    this.registerUser.password = form.value.password;
    this.registerUser.firstName = form.value.firstName;
    this.registerUser.lastName = form.value.lastName;

    this.authenticationService.register(this.registerUser).subscribe(
      () => {
      },
      () => {
        this.isLoading = false;
      }, () => {
        this.isLoading = false;
        this.router.navigate(['/login']);
      }
    );

  }


  onImageChange(e: any) {
    const reader = new FileReader();


    if(e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);
      this.registerUser.file = e.target.files[0];

      reader.onload = () => {
        this.imgFile = reader.result as string;
        this.registrationForm.patchValue({
          imgSrc: reader.result
        });

      };
    }
  }
}
