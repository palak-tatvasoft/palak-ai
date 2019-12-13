import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './component/post-list/post-list.component';

const routes: Routes = [
  {
    path: 'post-list',
    component: PostListComponent
  },
  {
    path: '**',
    redirectTo: 'post-list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
