import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.scss']
})
export class IntroduceComponent implements OnInit {

  constructor(
    private route:Router
  ) { }

  ngOnInit(): void {
  }


  onRedirect(){
    this.route.navigate(['space-chess-play']);
  }
}
