import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

const DATA = [
    { isSelected: false, period: 'April - June 2018', spends: 31700, cashback: 3170 },
    { isSelected: true, period: 'January - March 2018', spends: 31700, cashback: 3172 }
];

@Component({
    templateUrl: './table-radio.component.html',
    styleUrls: ['./table-radio.component.scss']
})
export class TableRadioComponent implements OnInit {
    dataSource = new MatTableDataSource(DATA);
    columns = [
        { name: '', id: 'isSelected', type: 'boolean'},
        { name: 'Period', id: 'period', type: 'number'},
        { name: 'Spends', id: 'spends', type: 'number'},
        { name: 'Cash back', id: 'cashback', type: 'number'}
    ];
    displayedColumns = [];
    @ViewChild(MatSort) sort: MatSort;

    ngOnInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.sortingDataAccessor = (item, headerId) => {
            switch (headerId) {
                case 'period':
                case 'cashback':
                    return item[headerId];
                default:
                    break;
            }
            return '';
        };
        this.displayedColumns = this.columns.map(col => col.id);
    }
}
