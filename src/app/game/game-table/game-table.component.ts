import {Component, OnInit} from '@angular/core';
import {CardsService} from '../../shared/services/cards.service';
import {Card} from '../../shared/models/card';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css']
})
export class GameTableComponent implements OnInit {

  cards$: Observable<Card[]>;

  constructor(private cardsService: CardsService) {

  }

  ngOnInit(): void {
    this.cards$ = this.cardsService.getCards();
  }

  onCardClick(card: Card) {
    card.visible = true;
  }
}
