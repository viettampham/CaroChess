import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroduceComponent } from './AppChess/introduce/introduce.component';
import { PlayChessSpaceComponent } from './AppChess/play-chess-space/play-chess-space.component';

const routes: Routes = [
  {path:"",component:IntroduceComponent},
  {path:"space-chess-play",component:PlayChessSpaceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
