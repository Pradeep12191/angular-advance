import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './grid-span.component.html',
    styleUrls: ['grid-span.component.scss']
})
export class GridSpanComponent implements OnInit {

    constructor(
        private router: Router
    ) {

    }
    gdColumns;
    noOfCols = 3;
    nOfRows = 3;
    selectedGrids = [];
    grids = [
        {
            id: 1,
            isMerged: false,
            isSelected: false,
            isDeleted: false,
            backgroundColor: 'none',
            grid: {
                row: { start: 1, end: 2, value: '1 / 2' },
                column: { start: 1, end: 2, value: '1 / 2' }
            }
        },
        {
            id: 2, isMerged: false, isDeleted: false, isSelected: false, backgroundColor: 'none',
            grid: {
                row: { start: 1, end: 2, value: '1 / 2' },
                column: { start: 2, end: 3, value: '2 / 3' }
            }
        },
        {
            id: 3, isMerged: false, isDeleted: false, isSelected: false, backgroundColor: 'none',
            grid: {
                row: { start: 2, end: 3, value: '2 / 3' },
                column: { start: 1, end: 2, value: '1 / 2' }
            }
        },
        {
            id: 4, isMerged: false, isDeleted: false, isSelected: false, backgroundColor: 'none',
            grid: {
                row: { start: 2, end: 3, value: '2 / 3' },
                column: { start: 2, end: 3, value: '2 / 3' }
            }
        },
        // { id: 4, isMerged: false, isSelected: false, backgroundColor: 'none', gridRow: '2 / 2' },
    ];

    ngOnInit() {
        console.log('sadasd');
        for (let i = 0; i < this.noOfCols; i++) {
            if (this.gdColumns) {
                this.gdColumns += ' auto ';
            } else {
                this.gdColumns = 'auto ';
            }
        }

        // this.gdColumns = new Array(this.noOfCols).reduce((acc, currentVal, intialVal = '') => {
        //     return acc + 'auto ';
        // });
        console.log(this.gdColumns);
    }

    onGridSelect(grid) {
        grid.isSelected = !grid.isSelected;
        if (grid.isSelected) {
            grid.backgroundColor = 'red';
        } else {
            grid.backgroundColor = '';
        }
        this.selectedGrids = this.grids.filter((g) => g.isSelected);
    }

    reload() {
        this.router.navigate(['home', 'viewContainerReference']);
    }

    onSpan() {
        console.log(this.selectedGrids);
        const firstCell = this.selectedGrids[0];
        const lastCell = this.selectedGrids[this.selectedGrids.length - 1];
        firstCell.grid.row.end = lastCell.grid.row.end;
        firstCell.grid.column.end = lastCell.grid.column.end;
        firstCell.grid.row.value = firstCell.grid.row.start + ' / ' + firstCell.grid.row.end;
        firstCell.grid.column.value = firstCell.grid.column.start + ' / ' + firstCell.grid.column.end;

        this.selectedGrids.forEach((grid) => {
            grid.isSelected = false;
            grid.backgroundColor = '';
            if (grid === firstCell) {
                grid.isMerged = true;
                return;
            }
            grid.isDeleted = true;
        });

        console.log(this.grids);
    }
}
