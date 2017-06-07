import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService, UserService } from '../_services/index';

// import { Http } from '@angular/http';
// import { Headers } from '@angular/http';
// import { contentHeaders } from '../headers';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(private router: Router, private userService: UserService, private alertService: AlertService) { }

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
        data => {
          //alert successful in login page.
          this.alertService.success('Registration Successful', true);
          this.router.navigate(['./login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }
  
    ngOnInit() {
  }
}

