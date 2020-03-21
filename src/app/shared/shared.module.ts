import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardsService} from './services/cards.service';


@NgModule({
  declarations: [],
  providers: [
    CardsService
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
