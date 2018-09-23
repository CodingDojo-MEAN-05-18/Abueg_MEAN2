import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { HomeTasksComponent } from './home-tasks/home-tasks.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'home/tasks',
    component: HomeTasksComponent,
    children: [{ path: 'public', component: TaskDetailsComponent }],
  },
  // { path: 'home/tasks/:id', component: TaskDetailsComponent },
];
export const routing = RouterModule.forRoot(APP_ROUTES);
// const routes: Routes = [
//   {
//     path: '',
//     pathMatch: 'full',
//     component: LandingComponent,
//     children: [], // subrouting
//   },
//   {
//     path: 'home',
//     pathMatch: 'full',
//     component: HomeComponent,
//     children: [],
//   },
//   {
//     path: 'home/tasks',
//     pathMatch: 'full',
//     component: HomeTasksComponent,
//     children: [],
//   },
//   {
//     path: '**',
//     pathMatch: 'full',
//     component: PagenotfoundComponent,
//     children: [],
//   },
// ];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
