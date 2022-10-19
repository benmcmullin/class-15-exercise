import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
name: string= '';
search = [];

public currentSearch() {
  this.search.push(this.name);
  this.name = '';
  console.log(this.search)
}


  constructor() { }

  ngOnInit(): void {
  }


}
