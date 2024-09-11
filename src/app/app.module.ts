import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayChessSpaceComponent } from './AppChess/play-chess-space/play-chess-space.component';
import { IntroduceComponent } from './AppChess/introduce/introduce.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayChessSpaceComponent,
    IntroduceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
