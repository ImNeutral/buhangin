import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FeedComponent } from './content/feed/feed.component';


const routes: Routes = [
    { path: '', component: MainComponent,     
      children: [
        { path: 'feed', component: FeedComponent }
      ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
