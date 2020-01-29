import { Component, OnInit } from '@angular/core';

import { Game } from './game';
import { GameActions } from './game-actions';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  width = 300;

  entities: Game[] = [{
    id: 1,
    name: 'BattleBlock Theater',
    description: 'Shipwrecked. Captured. Betrayed. Forced to perform for an audience of cats? '
      + 'Yes, all that and more when you unlock BattleBlock Theater!'
      + ' There\'s no turning back once you\'ve started on your quest to free over 300 of your imprisoned '
      + 'friends from evil technological cats. ',
    editor: 'The Behemoth',
    image: 'https://steamcdn-a.akamaihd.net/steam/apps/238460/header.jpg?t=1561397233',
    note: 9.8,
    category: 'Jeu de platform multijoueur'
  }, {
    id: 2,
    name: 'BattleBlock Theater 2',
    description: 'Shipwrecked. Captured. Betrayed. Forced to perform for an audience of cats? '
      + 'Yes, all that and more when you unlock BattleBlock Theater!'
      + ' There\'s no turning back once you\'ve started on your quest to free over 300 of your imprisoned '
      + 'friends from evil technological cats. ',
    editor: 'The Behemoth',
    image: 'https://steamcdn-a.akamaihd.net/steam/apps/238460/header.jpg?t=1561397233',
    note: 9.8,
    category: 'Jeu de platform multijoueur'
  }, {
    id: 2,
    name: 'BattleBlock Theater 2',
    description: 'Shipwrecked. Captured. Betrayed. Forced to perform for an audience of cats? '
      + 'Yes, all that and more when you unlock BattleBlock Theater!'
      + ' There\'s no turning back once you\'ve started on your quest to free over 300 of your imprisoned '
      + 'friends from evil technological cats. ',
    editor: 'The Behemoth',
    image: 'https://steamcdn-a.akamaihd.net/steam/apps/238460/header.jpg?t=1561397233',
    note: 9.8,
    category: 'Jeu de platform multijoueur'
  }, {
    id: 3,
    name: 'BattleBlock Theater 2',
    description: 'Shipwrecked. Captured. Betrayed. Forced to perform for an audience of cats? '
      + 'Yes, all that and more when you unlock BattleBlock Theater!'
      + ' There\'s no turning back once you\'ve started on your quest to free over 300 of your imprisoned '
      + 'friends from evil technological cats. ',
    editor: 'The Behemoth',
    image: 'https://steamcdn-a.akamaihd.net/steam/apps/238460/header.jpg?t=1561397233',
    note: 9.8,
    category: 'Jeu de platform multijoueur'
  }, {
    id: 4
    ,
    name: 'BattleBlock Theater 2',
    description: 'Shipwrecked. Captured. Betrayed. Forced to perform for an audience of cats? '
      + 'Yes, all that and more when you unlock BattleBlock Theater!'
      + ' There\'s no turning back once you\'ve started on your quest to free over 300 of your imprisoned '
      + 'friends from evil technological cats. ',
    editor: 'The Behemoth',
    image: 'https://steamcdn-a.akamaihd.net/steam/apps/238460/header.jpg?t=1561397233',
    note: 9.8,
    category: 'Jeu de platform multijoueur'
  }];

  constructor() { }

  ngOnInit() {
    // this.width = document.querySelector('article').offsetWidth;
  }

  truncate(value: string) {
    const words = value.split(' ', 20);

    return words.join(' ') + (words.length > 20 ? + '...' : '');
  }

  sizeUp() {
    this.width += 10;
  }

  sizeDown() {
    this.width = Math.max(100, this.width - 10);
  }

  onActionClick(action: GameActions, game: Game) {
    alert(`${['follow', 'share', 'buy'][action]} the game nammed ${game.name}`);
  }
}
