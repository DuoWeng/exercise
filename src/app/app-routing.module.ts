import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { DisplaySentenceComponent } from './display-sentence/display-sentence.component';
import { DisplayRefreshComponent } from './display-refresh/display-refresh.component'
import { DashboardComponent } from './dashboard/dashboard.component'


const routes: Routes = [{ path: 'parent', component: ParentComponent }, { path: 'display-sentence', component: DisplaySentenceComponent }, { path: 'display-refresh', component: DisplayRefreshComponent }, { path: 'dashboard', component: DashboardComponent }, { path: '', redirectTo: '/dashboard', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
