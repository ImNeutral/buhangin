import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { MetricsModel } from 'src/@shared/model/metrics.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  metrics: MetricsModel = {
    uid: "34565432",
    year: 2019,
    month: 9,
    pie: {
      'good': 45,
      'bad': 24,
      'normal': 128 
    },
    mentions: 218,
    actedItems: 19
  }
  
  doughnutChartLabels: Label[] = ['Good', 'Bad', 'Normal'];
  doughnutChartData: MultiDataSet = [
    [0, 0, 0]
  ];
  doughnutChartType: ChartType = 'doughnut';
  chartTitle = "Robinsons in January";

  constructor(private router: Router) { }

  ngOnInit() {
    this.setMetricsPieLabels();
    this.setMetricsPieValues();
  }

  setMetricsPieLabels() {
    var keys = Array();
      Object.keys(this.metrics.pie).forEach((key: Extract<keyof typeof Object, string>) => {
        keys.push(key);
      })
      this.doughnutChartLabels = keys;
  }

  
  setMetricsPieValues() {
    var values = Array();
      Object.keys(this.metrics.pie).forEach((key: Extract<keyof typeof Object, string>) => {
        const item = this.metrics.pie[key]
        values.push(item);
      })
      this.doughnutChartData[0] = values;
  }

  navigateToRankings() {
    this.router.navigate(['ranking']);
  }

}
