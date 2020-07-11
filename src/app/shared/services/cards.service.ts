import {Injectable} from '@angular/core';
import {Card} from '../models/card';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {shuffle, uniqueId, find} from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  cards: Card[] = [];
  private currentOpenCard: Card = null;
  private attempts = 0;
  private finished = new BehaviorSubject<boolean>(false);
  private finished$ = this.finished.asObservable();

  constructor() {
    const oneHalf: Card[] = [];
    for (let i = 0; i < 8; i++) {
      oneHalf[i] = {
        id: null,
        content: (i + 1).toString(),
        open: false
      };
    }
    this.cards = shuffle(
      [...oneHalf, ...oneHalf]
        .map((card: Card) => new Card(uniqueId('card'), card.content, card.open))
    );
  }

  getCardStream(): Observable<Array<Card>> {
    return of(this.cards);
  }

  getNumberOfAttempts(): number {
    return this.attempts;
  }

  isFinishedStream(): Observable<boolean> {
    return this.finished$;
  }

  updateGameState(card: Card): void {
    if (this.currentOpenCard !== null) {
      if (card.content === this.currentOpenCard.content && card.id !== this.currentOpenCard.id) {
        this.updateCardVisibility(card, true);
      } else {
        card.open = true;
        setTimeout(() => {
          this.updateCardVisibility(card, false);
        }, 200);
      }
    } else if (this.currentOpenCard === null) {
      this.currentOpenCard = card;
      card.open = true;
    }
    this.attempts++;
    if (this.areAllCardsOpen(this.cards)) {
      this.finished.next(true);
    }
  }

  private updateCardVisibility(card: Card, open: boolean) {
    find(this.cards, c => c.id === this.currentOpenCard.id).open = open;
    card.open = open;
    this.currentOpenCard = null;
  }

  private areAllCardsOpen(cards: Card[]): boolean {
    return cards.every(c => c.open);
  }
}
