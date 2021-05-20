import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DashboardService} from "../../services/dashboard.service";
import {User} from "../../model/User";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  username: string | null;
  isLoading = false;
  details: User = <User>{}
  image: any = '';


  constructor(private router: Router, private dashboardService: DashboardService, private  sanitization: DomSanitizer) {
    this.username = localStorage.getItem('username');
  }

  ngOnInit() {
    this.getPersonalDetails(this.username);
  }

  getPersonalDetails(username: string | null){
    this.isLoading = true;
    this.dashboardService.getPersonalDetails(username).subscribe(
      (data ) => {
        this.details = data;
      },
      () => {
        this.isLoading = false;
      }, () => {
        this.isLoading = false;

        if(this.details.picturePath != null){
          this.image = this.sanitization.bypassSecurityTrustResourceUrl(this.details.picturePath);

        }
      }
    );

  }

  edit(){
    this.router.navigate(['/details']);
  }
}
