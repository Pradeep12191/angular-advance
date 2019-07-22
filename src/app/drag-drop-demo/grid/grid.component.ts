import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  

  ngOnInit() {
    console.log('init grid span');
    
  }



  reload() {
    this.router.navigate(['gridSpan']);
  }

}
