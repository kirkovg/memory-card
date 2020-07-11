import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameTableComponent} from './game-table/game-table.component';
import {GameWinDialogComponent} from './game-win-dialog/game-win-dialog.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    GameTableComponent,
    GameWinDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    GameTableComponent,
    GameWinDialogComponent
  ],
  entryComponents: [
    GameWinDialogComponent
  ]
})
export class GameModule {
}
