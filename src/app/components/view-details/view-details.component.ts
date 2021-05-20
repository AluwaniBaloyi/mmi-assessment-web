import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DetailsService} from "../../services/details.service";
import {Details, Education} from "../../model/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  imgFile: string = '../../assets/images/profile-picture.png';
  detailsForm: FormGroup;
  isLoading = false;
  username: string | null = '';
  informationDetails : Details = <Details>{};
  education : Education = <Education>{};


  constructor(private router: Router, private detailsService: DetailsService) {
    this.username = localStorage.getItem('username');

    this.detailsForm = new FormGroup({
      aboutMe: new FormControl('', [Validators.required]),
      institutionName: new FormControl('', [Validators.required]),
      qualification: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      interests: new FormControl('', [Validators.required]),
      name: new FormControl('',[Validators.required]),
      file: new FormControl('', [Validators.required]),
      surname: new FormControl('',[Validators.required]),
      username: new FormControl('',[Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getAllInformationDetails(this.username);
  }

  getAllInformationDetails(username: string | null){
    this.isLoading = true;

    this.detailsService.getAllInformationDetails(username).subscribe(
      (data ) => {
        this.informationDetails = data;
        this.education = data.education[0];
      },
      () => {
        this.isLoading = false;
      }, () => {
        this.isLoading = false;
      }
    );

  }

  saveEducationDetails(education: Education){


  }


  saveAllInformationDetails(form: FormGroup){
    console.log(form.value);

    this.isLoading  = true;

    this.informationDetails.username = this.username;
    this.informationDetails.aboutMe = form.value.aboutMe;
    this.informationDetails.interests = form.value.interests;
    this.informationDetails.picturePath = form.value.file;


    this.informationDetails.education?.push({
      completed:'' ,
      endDate: form.value.endDate,
      id: 0,
      institutionName: form.value.institutionName,
      qualification: form.value.qualification,
      startDate: form.value.startDate,
      username: this.username
    });

    this.detailsService.postEducationDetails(this.informationDetails.education).subscribe(
      ( ) => {
      },
      () => {
        this.isLoading = false;
      }, () => {
        this.detailsService.updateAllInformationDetails(this.informationDetails).subscribe(
          (data ) => {
            this.informationDetails = data;
          },
          () => {
            this.isLoading = false;
          }, () => {
            this.router.navigate(['/dashboard']);
            this.isLoading = false;
          }
        )
      }
    )


  }

  onImageChange(e: any) {
    const reader = new FileReader();

    if(e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);
      this.informationDetails.picturePath = e.target.files[0];

      reader.onload = () => {
        this.imgFile = reader.result as string;
        this.detailsForm.patchValue({
          imgSrc: reader.result
        });

      };
    }
  }

}
