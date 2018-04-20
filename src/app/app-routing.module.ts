import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './routes/start/start.component';
import { RezervationsComponent } from './routes/rezervations/rezervations.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponent,
  },
  {
    path: 'rezervations',
    component: RezervationsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
