import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayChessSpaceComponent } from './play-chess-space.component';

describe('PlayChessSpaceComponent', () => {
  let component: PlayChessSpaceComponent;
  let fixture: ComponentFixture<PlayChessSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayChessSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayChessSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
