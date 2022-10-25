import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  captcha: string;
  email: string;

  constructor(private route: Router) {
    this.captcha = '';
    this.email = 'secret@email.com';
  }

  ngOnInit(): void {}

  resolved(captchaResponse: string) {
    this.captcha = captchaResponse;
    console.log('Resolved captcha with response:' + this.captcha);
  }
}
