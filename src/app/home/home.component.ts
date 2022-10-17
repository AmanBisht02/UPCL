import { supportsScrollBehavior } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  onClick() {
    this.route.navigate(['/new-connection-services']);
  }

  toTop() {
    document.body.scrollTop = 0;
  }
}
