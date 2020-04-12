import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../../services/overlay.service';
import { trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: '1',
        zIndex: "1"
      })),
      state('close', style({
        opacity: '0',
        zIndex: "-1"
      })),
      transition('open => close', [
        animate('0.3s')
      ]),
      transition('close => open', [
        animate('0.2s')
      ])
    ])
  ]
})
export class OverlayComponent implements OnInit {

  public isOpen: boolean;
  
  constructor(
    private overlayService: OverlayService
  ) { }

  ngOnInit(): void {
    this.overlayService.overlayState.subscribe((state) => {
      this.isOpen = state;
    })
  }
  public close() {
    this.overlayService.close();
  }

}
