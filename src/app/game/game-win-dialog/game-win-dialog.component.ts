import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-game-win-dialog',
  templateUrl: './game-win-dialog.component.html',
  styleUrls: ['./game-win-dialog.component.css']
})
export class GameWinDialogComponent implements OnInit {

  attempts: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.attempts = this.data.attempts;
  }

  restartGame() {
    window.location.reload();
  }

}
