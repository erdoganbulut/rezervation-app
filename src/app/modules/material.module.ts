import { NgModule } from '@angular/core';

import {
  MatSidenavModule, MatIconModule, MatButtonModule, MatToolbarModule, MatDrawer,
} from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ]
})
export class MaterialModule {}
