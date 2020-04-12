import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { OverlayService } from './overlay.service';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  
  private sidenavSubject = new Subject<boolean>();
  public sidenavState = this.sidenavSubject.asObservable();

  constructor(
    private overlayService: OverlayService
  ) { }

  public open() {
    this.sidenavSubject.next(true);
    this.overlayService.open();
  }
  public close() {
    this.sidenavSubject.next(false);
    this.overlayService.close();
  }
}
