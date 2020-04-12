import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, style, stagger, query, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
  animations: [
    trigger('pageAnimetions', [
      transition(':enter', [
        query('.collection', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(100, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)'),
            style({opacity: 1, transform: 'none'})
          ])
        ])
      ])
    ])
  ]
})
export class CollectionsComponent implements OnInit {
  @HostBinding('@pageAnimetions')
  public animetePage = true;

  public collectionDatas: string[] = [
    "test", "kkk", "dfasd"
  ]
  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.collectionDatas = [
    //     "test", "kkk", "dfasd"
    //   ]
    // }, 2000)
  }

}
