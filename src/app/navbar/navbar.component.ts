import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  loggedIn: boolean;
  showCard: {};

  constructor() { }

  ngOnInit(): void {
    this.loggedIn = false;
    this.clearDropdowns();
  }

  toggleDropdown(event) {
    var id = event.id;
    let prev = this.showCard[id];
    this.clearDropdowns();
    this.showCard[id] = !prev;
  }

  clearDropdowns() {
    this.showCard = {
      "home": false,
      "projects": false,
      "settings": false,
      "help": false
    }
  }
}