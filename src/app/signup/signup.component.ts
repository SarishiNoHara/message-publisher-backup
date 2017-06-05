import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { contentHeaders } from '../headers';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public http: Http) { }
  signup(event, signup, password) {
    event.preventDefault()
    let body = JSON.stringify({ signup, password });
    let params: URLSearchParams = new URLSearchParams();
    params.set('signup',signup);
    params.set('password',password);
    
    return this.http.post('http://localhost:9000/api/signup.json?'+params, {header: contentHeaders}).subscribe(
      response => {response.json();
                   console.log('signup successful!')},
      error => {alert(error.text());}
    ); 
 }

  ngOnInit() {
  }

}



