import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FeedComponent } from './content/feed/feed.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserComponent } from './content/user/user.component';
import { StatisticsComponent } from './content/statistics/statistics.component';
import { RankingComponent } from './content/ranking/ranking.component';


const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: '', component: MainComponent,     
      children: [
        { path: 'feed', component: FeedComponent },
        { path: 'user', component: UserComponent },
        { path: 'statistics', component: StatisticsComponent },
        { path: 'ranking', component: RankingComponent }
      ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
