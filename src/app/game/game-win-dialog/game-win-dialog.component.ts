import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-win-dialog',
  templateUrl: './game-win-dialog.component.html',
  styleUrls: ['./game-win-dialog.component.css']
})
export class GameWinDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  restartGame() {
    window.location.reload();
  }

}
