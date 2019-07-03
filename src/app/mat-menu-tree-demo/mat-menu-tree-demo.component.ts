import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-menu-tree-demo',
  templateUrl: './mat-menu-tree-demo.component.html',
  styleUrls: ['./mat-menu-tree-demo.component.css']
})
export class MatMenuTreeDemoComponent implements OnInit {

  animals = [
    {
      name: 'Vertebrates',
      options: [
        {
          name: 'Fishes',
          options: ['Baikal oilfish', 'Bala shark', 'Ballan wrasse', 'Bamboo shark']
        },
        {
          name: 'Amphibians',
          options: ['Sonoran desert toad', 'Western toad', 'Arroyo toad', 'Yosemite toad']
        },
        {
          name: 'Birds'
        }
      ]
    },
    {
      name: 'Invertebrates',
      options: [
        'Insects', 'Molluscs', 'Crustaceans', 'Corals'
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
