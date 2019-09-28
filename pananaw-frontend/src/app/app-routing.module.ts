import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FeedComponent } from './content/feed/feed.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
    { path: '', component: MainComponent,     
      children: [
        { path: 'feed', component: FeedComponent },
        { path: 'welcome', component: WelcomeComponent }
      ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
