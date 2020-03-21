import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameTableComponent} from './game-table/game-table.component';
import {GameWinDialogComponent} from './game-win-dialog/game-win-dialog.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    GameTableComponent,
    GameWinDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatGridListModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    GameTableComponent,
    GameWinDialogComponent
  ],
  entryComponents: [
    GameWinDialogComponent
  ]
})
export class GameModule { }
