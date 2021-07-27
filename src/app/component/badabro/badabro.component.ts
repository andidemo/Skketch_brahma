import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
@Component({
  selector: 'app-badabro',
  templateUrl: './badabro.component.html',
  styleUrls: ['./badabro.component.css']
})
export class BadabroComponent implements OnInit {

  weitageCalculator: FormGroup;

  public ratingBrand = [
    { value: 5, name: "Samsung" },
    { value: 3, name: "Nokia" },
    { value: 3, name: "Redmi" },
    { value: 4, name: "Oneplus" },
    { value: 2, name: "Oppo" },
    { value: 1, name: "Vivo" },
    { value: 1, name: "Others" },
  ]
  public numberOfContact = [
    { value: 5, name: "300+" },
    { value: 4, name: "200 - 300" },
    { value: 3, name: "150- 200 " },
    { value: 2, name: "100 - 150" },
    { value: 1, name: "0 - 100" },
  ]
  public photoclarity = [
    { value: 5, name: "80 - 100" },
    { value: 3, name: "40 - 60" },
    { value: 4, name: "60 - 80" },
    { value: 2, name: "20 - 40" },
    { value: 1, name: "0 - 20 " },
  ]
  public noofSubmissions = [
    { value: 5, name: "1" },
    { value: 4, name: "2" },
    { value: 3, name: "3" },
    { value: 2, name: "4" },
    { value: 1, name: "4+" },

  ]
  public company = [
    { value: 5, name: "Tyre 1" },
    { value: 3, name: "Tyre 2" },
    { value: 2, name: "Tyre 3" },
    { value: 1, name: "Unknown" },
  ]
  public server = [
    { value: 10, name: "server 10" },
    { value: 9, name: "server 9" },
    { value: 8, name: "server 8" },
    { value: 7, name: "server 7" },
    { value: 6, name: "server 6" },
    { value: 5, name: "server 5" },
    { value: 4, name: "server 4" },
    { value: 3, name: "server 3" },
    { value: 2, name: "server 2" },
    { value: 1, name: "server 1" },

  ];
  //   public StatsBarChart: any = [
  //     {company: 'Monday', frequency: 100000},
  //     {company: 'Tuesday', frequency: 80000},
  //     {company: 'Wednesday', frequency: 20000},
  //     {company: 'Friday', frequency: 70000},
  // ];
  public date: any;
  public days: any = [
    { company: 'Monday', value: 0 },
    { company: 'Tuesday', value: 1 },
    { company: 'Wednesday', value: 2 },
    { company: 'Friday', value: 3 },
  ];
  StatsBarChart = [{
    level: [{
      level: 5,
      points: 4
    },
    {
      level: 4,
      points: 0
    },

    {
      level: 3,
      points: 20
    },
    {
      level: 2,
      points: 10
    },
    {
      level: 1,
      points: 1
    },]
  },
  {
    level: [{
      level: 5,
      points: 3
    },
    {
      level: 4,
      points: 2
    },

    {
      level: 3,
      points: 10
    },
    {
      level: 2,
      points: 14
    },
    {
      level: 1,
      points: 4
    },]
  },
  {
    level: [{
      level: 5,
      points: 2
    },
    {
      level: 4,
      points: 4
    },

    {
      level: 3,
      points: 10
    },
    {
      level: 2,
      points: 5
    },
    {
      level: 1,
      points: 20
    },]
  },
  {
    level: [{
      level: 5,
      points: 4
    },
    {
      level: 4,
      points: 3
    },

    {
      level: 3,
      points: 2
    },
    {
      level: 2,
      points: 40
    },
    {
      level: 1,
      points: 24
    },]
  }
  ]


  public name;
  public rating;
  weightageValue: any;
  weightageSeperatevalue: any;
  currentRate = 8;
  //title = 'D3 Barchart with Angular 10';
  width: number;
  height: number;
  margin = { top: 20, right: 20, bottom: 30, left: 40 };
  x: any;
  y: any;
  svg: any;
  g: any;
  constructor(private formBuilder: FormBuilder) {
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
  }

  ngOnInit(): void {
    console.log(this.name, this.rating)
    this.weitageCalculator = this.formBuilder.group({
      rating: [''],
      contact: [''],
      photo: [''],
      submission: [''],
      company: [''],
    });
    this.initSvg();
    this.initAxis({ value: 0 });
    this.drawAxis();
    this.drawBars({ value: 0 });
  }
  calculator() {
    this.weightageValue = this.weitageCalculator.value;
    this.weightageSeperatevalue = Number(this.weightageValue.company) + Number(this.weightageValue.contact) + Number(this.weightageValue.photo) + Number(this.weightageValue.rating) + Number(this.weightageValue.submission) / 5;
    this.weitageCalculator.reset();
  }
  ratingcal() {
    this.name = '';
    this.rating = '';

  }
  serverdata = [];
  customerrating() {
    this.serverdata = this.server.filter(ser => ser.value <= Number(this.rating))
    console.log(this.serverdata)
  }
  initSvg() {
    this.svg = d3.select('#barChart')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', '0 0 900 500');
    this.g = this.svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  initAxis(val) {
    let chartVal: any = [];

    console.log(this.StatsBarChart[val.value].level);

    chartVal = this.StatsBarChart[val.value].level;
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(chartVal.map((d) => d.level));
    this.y.domain([0, d3Array.max(chartVal, (d) => d.points)]);
  }

  drawAxis() {
    this.g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x));
    this.g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y))
      .append('text')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('points');
  }

  drawBars(val) {
    let chartVal: any = [];
    chartVal = this.StatsBarChart[val.value].level
    this.g.selectAll('.bar')
      .data(chartVal)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => this.x(d.level))
      .attr('y', (d) => this.y(d.points))
      .attr('width', this.x.bandwidth())
      .attr('fill', '#498bfc')
      .attr('height', (d) => this.height - this.y(d.points));
  }

}
