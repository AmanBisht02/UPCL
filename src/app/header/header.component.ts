import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  toggleMenu() {
    const item1 = document.querySelector<HTMLElement>('.navbar')!;
    console.log(item1);
    if (item1.style.display == 'none') {
      item1.style.display = 'block';
    } else {
      item1.style.display = 'none';
    }
  }
}
