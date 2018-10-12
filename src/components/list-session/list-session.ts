import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { List } from 'ionic-angular';

/**
 * Generated class for the ListSessionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list-session',
  templateUrl: 'list-session.html'
})
export class ListSessionComponent {

  text: string;

  constructor() {
    console.log('Hello ListSessionComponent Component');
    this.text = 'Hello Remi';
  }

}
