import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardsService} from './services/cards.service';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [],
  providers: [
    CardsService
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    MatGridListModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class SharedModule {
}
