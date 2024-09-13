import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-play-chess-space',
  templateUrl: './play-chess-space.component.html',
  styleUrls: ['./play-chess-space.component.scss']
})
export class PlayChessSpaceComponent implements OnInit {

  @ViewChild('gridLayout') gridLayout!: ElementRef;
  constructor() { }
  CurrentChar = "";
  isDoneGeneration:boolean = false;
  horizone:number = 20;
  vertical: number = 15;

  squares: any[] = [];
  ngOnInit(): void {
    this.generateChessTable(this.horizone,this.vertical);
  }

  ngAfterViewInit(): void {
    console.log(this.gridLayout); 
    const elegridLayout = this.gridLayout.nativeElement as HTMLElement;
    if (elegridLayout) {
      elegridLayout.style.display = 'grid';
      elegridLayout.style.gridTemplateColumns = 'repeat('+this.horizone+', 50px)';
    }
  }

  generateChessTable(horizone: number, vertical: number) {
    if (horizone >= 3 && vertical >= 3) {
      const totalSquares = horizone * vertical;
      this.squares = Array(totalSquares).fill(0);
      this.isDoneGeneration = true;
    }
  }

  OnHandleClick(event:any){
    var clickedElement = event.target;
    var innerText = clickedElement.innerText;
    if (innerText != ""){
      alert("Vị trí này đã được sử dụng!");
      return;
    }
    if (this.CurrentChar == ""){
      clickedElement.innerHTML = "X";
      this.CurrentChar = "X";
    }else if (this.CurrentChar == "X"){
      clickedElement.innerHTML = "O";
      this.CurrentChar = "O";
    }else if (this.CurrentChar == "O"){
      clickedElement.innerHTML = "X";
      this.CurrentChar = "X";
    }
  }

}
