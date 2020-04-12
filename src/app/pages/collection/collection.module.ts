import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionComponent } from './collection.component';
import { LayoutComponent } from '../../components/layout/layout.component';
import { CollectionItemComponent } from './collection-item/collection-item.component';
import { CollectionsComponent } from './collections/collections.component';


@NgModule({
  declarations: [
    CollectionComponent,
    LayoutComponent,
    CollectionItemComponent,
    CollectionsComponent
  ],
  imports: [
    CommonModule,
    CollectionRoutingModule
  ]
})
export class CollectionModule { }
