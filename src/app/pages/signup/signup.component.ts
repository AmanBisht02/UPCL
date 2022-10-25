import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private route: Router, private http: HttpClient) {}

  ngOnInit(): void {}
  signup() {
    this.route.navigate(['/login']);
  }

  onSignup(signupData: { phnumber: number; email: string }) {
    console.log(signupData);

    this.http
      .post<{ name: string }>(
        // 'https://login-c58b5-default-rtdb.firebaseio.com/users.json',
        'https://appservices.upcl.org:8443/wss/api/v1/consumerLogin_TP',
        signupData
      )
      .subscribe((signupData) => {
        console.log(signupData);
      });
  }
}
