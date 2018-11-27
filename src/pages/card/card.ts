import { Component } from '@angular/core';

import { EventPage } from '../event/event';
import { UnternehmenPage } from '../unternehmen/unternehmen';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'card.html'
})
export class CardPage {

  tab1Root = HomePage;
  tab2Root = EventPage;
  tab3Root = UnternehmenPage;

  constructor() {

  }
}
