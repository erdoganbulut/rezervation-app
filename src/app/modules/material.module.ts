import { NgModule } from '@angular/core';

import {
  MatSidenavModule, MatIconModule, MatButtonModule, MatToolbarModule, MatDrawer, MatCardModule, MatMenuModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
  ],
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
  ]
})
export class MaterialModule {}
