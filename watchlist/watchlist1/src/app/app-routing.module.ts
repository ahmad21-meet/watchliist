import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowAllComponent } from './components/show-all/show-all.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path: 'watchlist',component: ShowAllComponent},
  {path:'update/:id',component:UpdateComponent},
  { path: '',   redirectTo: '/watchlist', pathMatch: 'full' },
  { path: '**', redirectTo: '/watchlist', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
