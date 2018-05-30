import { NgModule } from '@angular/core';

import {
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatDrawer,
  MatCardModule,
  MatMenuModule,
  MatFormFieldModule,
  MatSelectModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
  ]
})
export class MaterialModule {}
