import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private route: Router, private http: HttpClient) {}

  ngOnInit(): void {}
  signup() {
    this.route.navigate(['/signup']);
  }

  onLogin(loginData: { phnumber: number; email: string }) {
    this.http
      .get<{ name: string }>(
        'https://login-c58b5-default-rtdb.firebaseio.com/users.json'
      )
      .subscribe((loginData) => {
        console.log(loginData);
      });
  }
}
