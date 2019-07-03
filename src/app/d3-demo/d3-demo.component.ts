import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';
import { select, arc, selectAll, Selection, interpolate } from 'd3';
import { MatSliderChange } from '@angular/material';

const TAU = 2 * Math.PI;

@Component({
  selector: 'app-d3-demo',
  templateUrl: './d3-demo.component.html',
  styleUrls: ['./d3-demo.component.css']
})
export class D3DemoComponent implements OnInit, AfterViewInit {
  private _foreground: Selection<SVGElement, {}, HTMLElement, any>;

  private _profileArc = arc()
    .innerRadius(100)
    .outerRadius(120)
    .startAngle(0.5 * TAU);

  private _backgroundArc = arc().innerRadius(100)
    .outerRadius(120)
    .startAngle(0);
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    // select('div#d3')
    //   .selectAll('p')
    //   .data([1, 2, 3, 4])
    //   .enter()
    //   .append('p')
    //   .text((d) => d);



    const svg = select('svg').attr('width', 300).attr('height', 300),
      width = +svg.attr('width'),
      height = +svg.attr('height');
    svg
      .append('defs')
      .append('pattern').attr('x', 0).attr('y', 0).attr('height', '100%').attr('width', '100%')
      .attr('id', 'image1')
      .append('svg:image')
      .attr('x', -49)
      .attr('y', -46)
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('xlink:href', './assets/images/9a_Angular-JS-development.jpg');
    const g = svg.append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');


    const imageG = svg.append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
    const circleG = svg.append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');


    circleG.append('circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', 100)
      .style('stroke', 'rgb(31, 119, 180)')
      .style('storke-width', '1px')
      .style('fill', 'url(#image1)');

    const background = g.append('path')
      .datum({ endAngle: TAU })
      .style('fill', '#ddd')
      .attr('d', this._backgroundArc);

    this._foreground = g.append('path')
      .datum({ endAngle: 0.5 * TAU })
      // .style('fill', 'rgb(212, 22, 96)')
      .style('fill', '#313a67')
      .attr('d', this._profileArc);
  }

  private _calculate(per) {
    return (per / 100) + 0.5;
  }

  private updateProfilePer(change: MatSliderChange) {
    this._foreground.transition().duration(750).attrTween('d', this._arcTween(this._calculate(change.value) * TAU));
  }

  private _arcTween(newAngle) {
    return (d) => {
      const _interpolate = interpolate(d.endAngle, newAngle);
      return (t) => {
        d.endAngle = _interpolate(t);
        return this._profileArc(d);
      };
    };
  }

}
