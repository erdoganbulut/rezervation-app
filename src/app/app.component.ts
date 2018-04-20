import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { OPEN_SIDENAV, CLOSE_SIDENAV, TRIGGER_SIDENAV } from './store/sidenav/constants';
import { AppState } from './models/appstate.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  isDrawer$: Observable<AppState['sidenav']>;

  constructor(private store: Store<AppState>) {
    this.isDrawer$ = store.pipe(select('sidenav'));
  }

  open() {
    this.store.dispatch({ type: OPEN_SIDENAV });
  }

  close() {
    this.store.dispatch({ type: CLOSE_SIDENAV });
  }

  trigger() {
    this.store.dispatch({ type: TRIGGER_SIDENAV });
  }

  ngOnInit() {
  }

}
