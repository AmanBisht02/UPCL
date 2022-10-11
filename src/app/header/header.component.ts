import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
