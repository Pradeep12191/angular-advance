import { Component, OnInit } from '@angular/core';
import { Subject, Observable, Notification, interval, of, timer, from } from 'rxjs';
import { switchMap, materialize, flatMap, mergeAll, map, mergeMap, exhaustMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  btnClick = new Subject();
  mergeClick = new Subject();
  exhaustClick = new Subject();
  step = 0;
  accordionDisplayMode = 'default';

  constructor() { }

  ngOnInit() {

    this.exhaustClick.pipe(
      exhaustMap(() => {
        return new Observable((observer) => {
          observer.next('started');
          setTimeout(() => {
            // observer.next('completed');
            observer.error('error');
          }, 4000);
        }).pipe(materialize());
      }),
    ).subscribe((name) => {
      console.log(name);
    }, (err) => {
      console.log(err);
    });

    this.mergeClick.pipe(

      map(() => {
        return from(['Pradeep', 'Randy']);
      })
    )
      .subscribe((obs) => {
        obs.subscribe((name) => console.log(name));
      });

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

  onPanelClick() {
    console.log('panel clicked')
  }

  onClick() {
    console.log('clicked')
  }

  mergeObs() {
    // this.mergeClick.next();
    from(['Pradeep', 'Randy']).pipe(
      mergeMap((name) => {
        return of(`${name} is awesome! (msg #1)`, `${name} is awesome! (msg #2)`);
      }),
    ).subscribe((msg) => {
      console.log(msg);
    });
  }

  api(searcStr) {

  }

  nextStep() {
    this.step++;
  }

  setStep(index) {
    console.log('opened', index);
    this.step = index;
  }

  prevStep() {
    this.step--;
  }

  exhaustObs() {
    // this.exhaustClick.next();
    from(['1', '2']).pipe(tap((val) => {
      timer(2000);
    })).subscribe((val) => {
      console.log(val);
    });
  }

  next() {
    this.step = 1;
  }

}
