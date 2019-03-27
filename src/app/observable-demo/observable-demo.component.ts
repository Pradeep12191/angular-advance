import { Component, OnInit } from '@angular/core';
import { Subject, Observable, Notification, interval } from 'rxjs';
import { switchMap, materialize, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  btnClick = new Subject();

  constructor() { }

  ngOnInit() {

    // this.btnClick.subscribe((value) => {
    //   interval(1000).subscribe((i) => {
    //     console.log(i);
    //   });
    // });

    // this.btnClick.pipe(switchMap((value) => {
    //   // console.log(value);
    //   return interval(1000);
    // })).subscribe((i) => {
    //   console.log(i);
    // });

    this.btnClick
      .pipe(
        switchMap(() => {
          return new Observable((observer) => {
            let i = 0;
            setInterval(() => {
              // console.log(i);
              if (i === 5) {
                return observer.error('error');
              }
              observer.next('obs1 ' + i++);
              // observer.complete();
            }, 1000);
          }).pipe(
            materialize(),
            /* --- correct way of chaining --- */
            // switchMap((result) => {
            //   console.log(result);
            //   return new Observable((observer) => {
            //     let i = 0;
            //     setInterval(() => {
            //       // console.log(i);
            //       if (i === 5) {
            //         return observer.error('error');
            //       }
            //       observer.next('obs2 ' + i++);
            //       // observer.complete();
            //     }, 1000);
            //   });
            // }),
            // materialize()
            /* --- correct way of chaining --- */
          );
        })
      )
      /* wrong chaining */
      .pipe(switchMap((result) => {
        console.log(result);
        return new Observable((observer) => {
          let i = 0;
          setInterval(() => {
            // console.log(i);
            if (i === 5) {
              return observer.error('error');
            }
            observer.next('obs2 ' + i++);
            // observer.complete();
          }, 1000);
        }).pipe(materialize());
      }))
      /* wrong chaining */
      .subscribe(
        (val: Notification<any>) => {
          console.log('success', val);
        },
        (err) => {
          console.log('error', err);
        }
      );
  }

  emitValue() {
    this.btnClick.next('btn click');
    // interval(1000).subscribe((i) => {
    //   console.log(i);
    // });
  }

  api(searcStr) {

  }

}
