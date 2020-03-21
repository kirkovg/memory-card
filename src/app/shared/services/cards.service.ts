import {Injectable} from '@angular/core';
import {Card} from '../models/card';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  cards: Card[] = [];

  constructor() {
    for (let i = 0; i < 16; i++) {
      this.cards[i] = {
        content: i.toString(),
        visible: false
      };
    }
  }

  getCards(): Observable<Array<Card>> {
    return of(this.cards);
  }
}
