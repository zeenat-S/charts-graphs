import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  chart: ApexCharts | undefined;

  constructor() { }

  ngOnInit(): void {
    this.chart = new ApexCharts(document.querySelector("#chart"), this.getChartOptions());
    this.chart.render();
  }

  getChartOptions(): ApexCharts.ApexOptions {
    return {
      chart: {
        type: 'bar',
        height: 350
      },
      series: [{
        name: 'Sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      }
    }
  }
}
