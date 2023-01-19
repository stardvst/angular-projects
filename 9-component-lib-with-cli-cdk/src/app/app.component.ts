import { Component } from '@angular/core';
import { Card } from 'ui-controls';
import { assassins } from './assassins';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '9-component-lib-with-cli-cdk';
  cards: Card[] = assassins;
}
