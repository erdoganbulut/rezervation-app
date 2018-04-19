import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { OPEN_SIDENAV, CLOSE_SIDENAV, TRIGGER_SIDENAV } from '../../store/sidenav/constants';
import { AppState } from '../../models/appstate.model';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  handleClickOpenSidenav() {
    this.store.dispatch({ type: OPEN_SIDENAV });
  }

  handleClickCloseSidenav() {
    this.store.dispatch({ type: CLOSE_SIDENAV });
  }

  handleClickTriggerSidenav() {
    this.store.dispatch({ type: TRIGGER_SIDENAV });
  }

  ngOnInit() {
  }

}
