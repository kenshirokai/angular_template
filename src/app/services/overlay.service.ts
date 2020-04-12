import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  public overlaySubject = new Subject<boolean>()
  public overlayState = this.overlaySubject.asObservable();

  constructor() { }

  public open(){
    this.overlaySubject.next(true);
  }
  public close(){
    this.overlaySubject.next(false);
  }
}
