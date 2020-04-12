import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';

import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        right: "0"
      })),
      state('close', style({
        right: "-300px"
      })),
      transition('open => close', [
        animate('0.3s')
      ]),
      transition('close => open', [
        animate('0.3s')
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {

  public isOpen: boolean = false

  constructor(
    private sidenavService: SidenavService
  ) { }

  ngOnInit(): void {
    this.sidenavService.sidenavState.subscribe((state) => {
      this.isOpen = state;
    })
  }
  public closeSidenav() {
    this.sidenavService.close();
  }

}
