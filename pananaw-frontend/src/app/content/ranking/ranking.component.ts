import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RankService } from 'src/@shared/service/rank.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  rankings = [];

  constructor(private router: Router,
              private rankService: RankService) { }

  ngOnInit() {
    this.rankService.findRanks().subscribe(ranks => {
      const sorted = ranks.sort((a, b) => b.good - a.good);

      this.rankings = sorted.map(rank => {
        return { location: rank.location ? rank.location : 'Others' };
      });

    });
  }

  navigateToStatistics() {
    this.router.navigate(['statistics']);
  }
}
