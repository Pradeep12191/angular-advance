import { Component, OnInit } from '@angular/core';

const PIE_DATA = [
  {
    percentage: 0.45,
    label: 'Thing 1'
  },
  {
    percentage: 0.21,
    label: 'Thing Two'
  },
  {
    percentage: 0.11,
    label: 'Another Thing'
  },
  {
    percentage: 0.23,
    label: 'Pineapple'
  }
];

const PIE_DATA2 = [
  {
    percentage: 0.15,
    label: 'Thing 1'
  },
  {
    percentage: 0.21,
    label: 'Thing Two'
  },
  {
    percentage: 0.11,
    label: 'Another Thing'
  },
  {
    percentage: 0.23,
    label: 'Pineapple'
  }
]

const HOVER = {
  stroke: '#fff',
  strokeWidth: '2px',
  filter: 'url(#dropshadow)'
}

@Component({
  selector: 'app-raw-piechart',
  templateUrl: './raw-piechart.component.html',
  styleUrls: ['./raw-piechart.component.css']
})
export class RawPiechartComponent implements OnInit {

  public pieData;
  area = 180;
  sectorSide = 0;
  hover;
  colors = [
    '#61C0BF', '#DA507A', '#BB3D49', '#DB4547'
  ];
  sectors = [];
  constructor() { }

  ngOnInit() {
    this.pieData = PIE_DATA;
    this.sectorSide = this.area / 2;
    this.sectors = this.createSectors(this.pieData);
    // setTimeout(() => {
    //   this.sectors = this.createSectors(PIE_DATA2);
    // }, 2000);

  }

  onMouseenter(sector) {
    sector.hover = HOVER;
  }

  onMouseleave(sector) {
    sector.hover = null;
  }

  createSectors(data) {
    const l = this.area / 2;
    const m = this.area / 2;
    let a = 0; // Angle
    let aRad = 0; // Angle in Rad
    let z = 0; // Size z
    let x = 0; // Side x
    let y = 0; // Side y
    let X = 0; // SVG X coordinate
    let Y = 0; // SVG Y coordinate
    let R = 0; // Rotation
    let aCalc = 0;
    let arcSweep = 0;
    const sectors = [];

    data.map((item, key) => {

      a = 360 * item.percentage;
      aCalc = (a > 180) ? 360 - a : a;
      aRad = aCalc * Math.PI / 180;
      z = Math.sqrt(2 * l * l - (2 * l * l * Math.cos(aRad)));
      if (aCalc <= 90) {
        x = l * Math.sin(aRad);
      } else {
        x = l * Math.sin((180 - aCalc) * Math.PI / 180);
      }

      y = Math.sqrt(z * z - x * x);
      Y = y;

      if (a <= 180) {
        X = l + x;
        arcSweep = 0;
      } else {
        X = l - x;
        arcSweep = 1;
      }

      sectors.push({
        percentage: item.percentage,
        label: item.label,
        color: this.colors[key],
        arcSweep: arcSweep,
        L: l,
        X: X,
        Y: Y,
        R: R,
        hover:null
      });

      R = R + a;
    });
    return sectors;
  }
}
