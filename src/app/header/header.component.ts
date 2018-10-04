import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from'../shared/mahasiswa';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbar = 'Navbar';
  home = 'Home';
  master = 'MasterData'
  constructor() { }

  ngOnInit() {
  }

}
