import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { OPEN, CLOSE, TRIGGER } from '../../store/sidenav/index';
import { AppState } from '../../models/appstate.model';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  handleClickOpenSidenav() {
    this.store.dispatch({ type: OPEN });
  }

  handleClickCloseSidenav() {
    this.store.dispatch({ type: CLOSE });
  }

  handleClickTriggerSidenav() {
    this.store.dispatch({ type: TRIGGER });
  }

  ngOnInit() {
  }

}
