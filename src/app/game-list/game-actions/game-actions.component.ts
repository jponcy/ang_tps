import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-actions',
  templateUrl: './game-actions.component.html',
  styleUrls: ['./game-actions.component.scss']
})
export class GameActionsComponent implements OnInit {

  @Output()
  private readonly click = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  // Solution 1
  /*
  onFollow(event: MouseEvent) {
    event.preventDefault();
    this.click.emit('follow');
  }
  onShare(event: MouseEvent) {
    event.preventDefault();
    this.click.emit('share');
  }
  onBuy(event: MouseEvent) {
    event.preventDefault();
    this.click.emit('buy');
  }
  */

  // Solution 2
  onAction(action: string, event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    this.click.emit(action);
  }

  // Solution 3
  /*
  onAction(event: any) {
    event.stopPropagation();
    event.preventDefault();
    this.click.emit(event.target.innerText);
  }
  */
}
