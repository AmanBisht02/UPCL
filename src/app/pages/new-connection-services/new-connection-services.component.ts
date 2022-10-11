import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-connection-services',
  templateUrl: './new-connection-services.component.html',
  styleUrls: ['./new-connection-services.component.css'],
})
export class NewConnectionServicesComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}
}
