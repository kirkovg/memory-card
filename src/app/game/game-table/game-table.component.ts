import {Component, Input, OnInit} from '@angular/core';
import {CardsService} from '../../shared/services/cards.service';
import {Card} from '../../shared/models/card';
import {MatDialog} from '@angular/material/dialog';
import {GameWinDialogComponent} from '../game-win-dialog/game-win-dialog.component';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css']
})
export class GameTableComponent implements OnInit {

  @Input() cards: Array<Card>;

  constructor(private cardsService: CardsService,
              private dialogService: MatDialog) {
  }

  ngOnInit(): void {

    this.cardsService.isFinishedStream()
      .pipe(filter(finished => finished))
      .subscribe(() => {
        this.dialogService.open(GameWinDialogComponent, {
          width: '500px',
          data: {
            attempts: this.cardsService.getNumberOfAttempts()
          }
        });
    });
  }

  onCardClick(card: Card) {
    this.cardsService.updateGameState(card);
  }
}
