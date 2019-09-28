import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FeedComponent } from './content/feed/feed.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent },
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
