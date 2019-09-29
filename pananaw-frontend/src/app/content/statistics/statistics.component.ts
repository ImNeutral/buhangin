import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { MetricsModel } from 'src/@shared/model/metrics.model';
import { MetricsService } from 'src/@shared/service/metrics.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  metrics: MetricsModel = {
    id: "34565432",
    year: 2019,
    month: 9,
    mentions: 218,
    bad: 10,
    good: 10,
    normal: 10
  }
  show = false;
  doughnutChartLabels: Label[] = ['Good', 'Bad', 'Normal'];
  doughnutChartData: MultiDataSet = [
    [1, 2, 3]
  ];
  doughnutChartType: ChartType = 'doughnut';
  chartTitle = "Robinsons in September";

  constructor(private router: Router,
              private metricsService: MetricsService) { }

  ngOnInit() {
    var this_ = this;
    console.log(this.doughnutChartData);
    this.metricsService.getAllMetrics().subscribe(function(metric) {
      this_.metrics = metric.pop();
      this_.setMetricsPieValue();
      this_.setMetricLabel();
    });
  }

  setMetricLabel() {
    var dataSet = [];
    dataSet.push("Good");
    dataSet.push("Bad");
    dataSet.push("Normal");
    this.doughnutChartLabels.length = 0;
    this.doughnutChartLabels = dataSet;
    this.show = true;
  }

  setMetricsPieValue() {
    var dataSet = [];
    dataSet.push(this.metrics.good);
    dataSet.push(this.metrics.bad);
    dataSet.push(this.metrics.normal);
    this.doughnutChartData.length = 0;
    this.doughnutChartData[0] = dataSet;
  }

  navigateToRankings() {
    this.router.navigate(['ranking']);
  }

}
