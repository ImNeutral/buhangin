import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  rankings = ["Ortigas", "Pasay", "Makati"];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToStatistics() {
    this.router.navigate(['statistics']);
  }
}
