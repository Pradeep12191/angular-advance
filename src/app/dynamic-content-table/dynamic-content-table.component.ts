import { Component, Input, OnInit, ViewChild, Output, EventEmitter, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { ClickInfo } from './models/ClickInfo';

// columns
// columns wrapped on mobile - same columns will be added to details expand, mobile sort header(should be sortable)

// these columns are for mobile purpose
const FILTER_COL_ID = 'filter_sort';
const MORE_DETAIL_COL_ID = 'more_details';
const MOBILE_HDR_PREFIX = '-mobile-header';

const expandTrigger = [
    trigger('expand', [
        state('collapsed, void', style({ height: '0px', minHeight: '0', padding: '0', display: 'none' })),
        state('expanded', style({ height: '*', minHeight: '*' })),
        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
];

@Component({
    selector: 'app-dynamic-content-table',
    templateUrl: './dynamic-content-table.component.html',
    styleUrls: ['./dynamic-content-table.component.scss'],
    animations: [expandTrigger]
})
export class DynamicContentTableComponent implements OnInit, OnChanges {
    @Input() dataSource: MatTableDataSource<any>;
    @Input() columns: any[];
    @Input() columnKeyPropName = 'id';
    @Input() mobileColIds = [];
    @Input() detailsColIds = [];
    @Input() sortableColIds = [];
    @Output() rowSelect = new EventEmitter();
    @Output() labelClick = new EventEmitter<ClickInfo>();
    public displayedColumns;
    public detailColumns;
    public desktopColumnIds: any[];
    //  = ['isSelected', 'period', 'spends', 'cashBack'];
    public sortHeaderState = 'collapsed';
    public expandedRow;
    public mobileSortableColumns;
    public mobileSortableColumnIds;

    @ViewChild(MatSort) sort;
    constructor(
        private mediaObs: MediaObserver,
        private cdr: ChangeDetectorRef
    ) {

    }

    public ngOnChanges(changes: SimpleChanges) {
        const datasource = changes['dataSource'];
        if (datasource && !datasource.firstChange && (datasource.currentValue !== datasource.previousValue)) {
            this._addMoreDetailsData();
        }
    }

    public ngOnInit() {
        this.dataSource.sort = this.sort;
        // init will call again if toggling the view with *ngIf, so no need to add addtional col props for mobile
        // to keep track of the columns used for mobile using this boolean
        if (this.columns && this.columns.length) {
            if (this.sortableColIds && this.sortableColIds.length) {
                this._addSortableProp();
            }
            if (this.mobileColIds && this.mobileColIds.length) {
                // add filter header and expand row only when mobile cols are defined
                if (this.detailsColIds && this.detailsColIds.length) {
                    this._addFilterCol(this.columns);
                    this.mobileColIds = [...this.mobileColIds, MORE_DETAIL_COL_ID];
                    this._addMoreDetailsCol(this.columns);
                    this._addMoreDetailsData();
                    this._addExpandProp();

                    if (this.sortableColIds && this.sortableColIds.length) {
                        this._setDetailsSortColumns();
                    }
                }
            }
        }
        if (this.mobileColIds && this.mobileColIds.length) {
            this.mediaObs.media$.subscribe((change: MediaChange) => {
                if (change.mqAlias === 'xs') {
                    this.displayedColumns = this.mobileColIds;
                } else {
                    this.displayedColumns = this.desktopColumnIds;
                    this.sortHeaderState = 'collapsed';
                    if (this.expandedRow) {
                        this.expandedRow.more_details.direction = 'down';
                        this.expandedRow = null;
                    }
                }
            });
        }

        this.desktopColumnIds = this.columns.filter((col) => !col.mobileOnly).map(col => col[this.columnKeyPropName]);
        this.displayedColumns = this.desktopColumnIds;
        this.detailColumns = this.columns.filter(col => col.isExpand);
    }

    public rowSelected(row) {
        this.rowSelect.emit(row);
    }

    public labelClickedHandler(clickInfo: ClickInfo) {
        this.labelClick.emit(clickInfo);
    }

    // changing arrow
    public arrowClickedHandler(row) {
        if (this.expandedRow && this.expandedRow !== row) {
            this.expandedRow.more_details.direction = 'down';
        }
        row.more_details.direction = row.more_details.direction === 'down' ? 'up' : 'down';
        this.expandedRow = this.expandedRow === row ? null : row;
    }

    public expandFilter(colType) {
        if (colType !== 'filter') {
            return;
        }
        this.sortHeaderState = this.sortHeaderState === 'expanded' ? 'collapsed' : 'expanded';
    }

    private _addFilterCol(columns) {
        const isColAdded = columns.find(col => col.id === FILTER_COL_ID);
        if (isColAdded) {
            return;
        }
        columns.push({
            name: '',
            id: FILTER_COL_ID,
            type: 'filter',
            isMobile: true,
            mobileOnly: true,
            header: {
                width: 10,
                mobileWidth: 15
            },
            column: {
                width: 10,
                mobileWidth: 0
            }
        });
    }

    private _addMoreDetailsCol(columns) {
        const isColAdded = columns.find(col => col.id === MORE_DETAIL_COL_ID);
        if (isColAdded) {
            return;
        }
        columns.push({
            name: '',
            id: MORE_DETAIL_COL_ID,
            type: 'collapse',
            isMobile: true,
            mobileOnly: true,
            header: {
                width: 0,
                mobileWidth: 0
            },
            column: {
                width: 10,
                mobileWidth: 15
            }
        });
    }

    private _addMoreDetailsData() {
        this.dataSource.data.forEach(cashback => {
            cashback[MORE_DETAIL_COL_ID] = { label: 'more details ...', showArrow: true, direction: 'down' };
        });
    }

    private _addSortableProp() {
        this.columns.forEach(col => {
            if (this.sortableColIds.indexOf(col[this.columnKeyPropName]) !== -1) {
                col['sortable'] = true;
            }
        });
    }

    private _addExpandProp() {
        this.columns.forEach(col => {
            if (this.detailsColIds.indexOf(col[this.columnKeyPropName]) !== -1) {
                col['isExpand'] = true;
            }
        });
    }

    private _setDetailsSortColumns() {
        let smColumns = [];
        smColumns = JSON.parse(JSON.stringify(this.columns.filter(col => col.sortable && col.isExpand)));
        if (smColumns && smColumns.length) {
            this.mobileColIds = [...this.mobileColIds, FILTER_COL_ID];
        }
        smColumns.forEach((col) => {
            col.id = col.id + MOBILE_HDR_PREFIX;
        });
        this.mobileSortableColumns = smColumns;
        this.mobileSortableColumnIds = this.mobileSortableColumns.map(col => col.id);
    }
}
