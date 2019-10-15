import { Component, ViewChildren, ElementRef, QueryList, ViewChild, OnInit } from '@angular/core';
import { IDatasource } from 'ngx-ui-scroll';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { of, BehaviorSubject, Observable, throwError } from 'rxjs';
import { throttleTime, exhaust, exhaustMap, mergeMap, delay, scan, catchError, tap, map } from 'rxjs/operators';


@Component({
    templateUrl: './virtual-scroll-demo.component.html',
    styleUrls: ['./virtual-scroll-demo.component.scss']
})
export class VirtualScrollComponent implements OnInit {
    @ViewChildren('focusElem') inputs: QueryList<ElementRef>;
    @ViewChild(CdkVirtualScrollViewport) viewPort: CdkVirtualScrollViewport;
    @ViewChild('view', {read: ElementRef}) view:  ElementRef;
    items: any[];
    offset = new BehaviorSubject(0);
    infinte: Observable<any>;
    batch = 100;
    peoples = [];
    constructor(
        private http: HttpClient
    ) {
        this.items = Array.from({ length: 10000 }).map((_, index) => 'item ' + (index + 1));
        const batchMap = this.offset.pipe(
            tap((offsetVal) => console.log(offsetVal)),
            throttleTime(500),
            exhaustMap((n) => {
                return this.getData(n).pipe(catchError((err) => throwError(err)));
            }),
            map((batchData) => {
                this.peoples = [...this.peoples, ...batchData];
                return this.peoples;
            })
        );

        this.infinte = batchMap;


    }

    ngOnInit() {
        // this.offset.next();
    }

    scrollIndexChanged(event, offset) {
        // console.log(event);
        const end = this.viewPort.getRenderedRange().end;
        const total = this.viewPort.getDataLength();
        // if(end === )
        console.log(`${end}, '>=', ${total}`);
        if (end === total) {
            this.offset.next(offset);
        }
    }

    getData(offset) {
        return of(this.items.slice(offset, this.batch + offset)).pipe(delay(2000));
    }

    reset() {
        this.peoples = [];
        this.offset.next(0);
        (this.view.nativeElement as HTMLElement).scrollTo(0, 0);
    }

    // getBatch() {
    //     return
    // }

}
