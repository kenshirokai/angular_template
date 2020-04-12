import { Component, OnInit, Input } from '@angular/core';

import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Input() title: string = "Angular Template App";

  constructor(
    private sidenavService: SidenavService
  ) { }

  ngOnInit(): void {
  }

  public openSidenav() {
    this.sidenavService.open();
  }

}
