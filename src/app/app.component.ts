import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CardsService} from './shared/services/cards.service';
import {Observable} from 'rxjs';
import {Card} from './shared/models/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cards$: Observable<Array<Card>>;

  constructor(private dialogService: MatDialog,
              private cardsService: CardsService) {
  }

  ngOnInit() {
    this.cards$ = this.cardsService.getCardStream();
  }
}
