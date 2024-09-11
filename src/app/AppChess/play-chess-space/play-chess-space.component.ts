import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-chess-space',
  templateUrl: './play-chess-space.component.html',
  styleUrls: ['./play-chess-space.component.scss']
})
export class PlayChessSpaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.gennerateChessTable(10,10);
  }

  gennerateChessTable(Horizone:number,Vertical:number){
    if (Horizone >= 3  && Vertical >= 3){
      var TotalSquare = Vertical * Horizone;
      for (var i = 1; i <= TotalSquare; i++){
        var eleSpacePlay = document.getElementById('space-play-chess');
        if (eleSpacePlay){

        }
      }
    }
  }
  OnHandleClick(event:any){
    var clickedElement = event.target;
    clickedElement.innerHTML = "X";
  }

}
