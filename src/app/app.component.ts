import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { OPEN, CLOSE, TRIGGER } from './store/sidenav/index';
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
    this.store.dispatch({ type: OPEN });
  }

  close() {
    this.store.dispatch({ type: CLOSE });
  }

  trigger() {
    this.store.dispatch({ type: TRIGGER });
  }

  ngOnInit() {
  }

}
