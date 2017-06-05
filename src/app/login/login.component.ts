import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../headers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, public http: Http) { }

  login(event, login, password) {
    event.preventDefault();
    let params: URLSearchParams = new URLSearchParams();
    params.set('login',login);
    params.set('password',password);
    params.set('type', 'cookie');

    this.http.post('http://127.0.0.1:9000/api/login.json?'+params, {headers: contentHeaders})
      .subscribe(
        response => {
          response.json();
          console.log('login successful');
          this.router.navigate(['homepage']);
        },
        error => {
          console.log(error.text());
        }
      )
  }

    signup(event) {
    event.preventDefault();
    this.router.navigate(['signup']);
  }

  ngOnInit() {
  }

}


