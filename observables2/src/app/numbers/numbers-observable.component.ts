//This is simulating an async event...it's really hardcoded
//

import {Component, OnInit} from '@angular/core';
import {from, map, Observable, of, Subscription, timer} from 'rxjs';
import { concatMap } from 'rxjs/operators';
@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  standalone: true,
  styleUrls: ['./numbers.component.css']
})
export class NumbersObservableComponent implements OnInit {

  Numbers: Observable<any>; //methods: subscribe(), unsubscribe(), next()
  Timer: Observable<any>;
  Delayed: Observable<number>;

  Observer!: Subscription;
  currentValue!: number;
  errorValue: any;
  time!: number;
currentDelayedValue!: number;
  constructor() {
    this.Numbers = of(1,2,3,4,5,6,7,8)
//     this.Numbers = from([1, 2, 3, 4, 5, 6, 7, 8]); // create observable from a promise, etc
    this.Timer = timer(1000, 2000);
    this.Delayed = this.Numbers = from([1, 2, 3, 4, 5, 6, 7, 8]).pipe(
      concatMap(item => timer(1000).pipe(
        map(() => item)
      ))
    );

    console.log('in constructor');

  }

  ngOnInit(): void {
  }

  obsOptions = {  //pass in next(), error(), and complete()
    next: (value: number) => {
      console.log('in next with ', value);
      this.currentValue = value;
    },
    error: (err: any) => {
      console.log('in error with ', err);
      this.errorValue = err;
    },
    complete: () => {
      console.log('complete')
    }
  };

  startNumbers() {
    console.log('subscribing');
    this.Observer = this.Numbers.subscribe(this.obsOptions);
  }
  timerOptions = {  //pass in next(), error(), and complete()
    next: (value: number) => {
      console.log('in timer with ', value);
      this.time = value;
    },
    error: (err: any) => {
      console.log('in error with ', err);
      this.errorValue = err;
    },
    complete: () => {
      console.log('timer complete')
    }
  };
  startTimer() {
    console.log('starting timer');
    this.Timer.subscribe(this.timerOptions)

  }

  delayedOptions = {
    next: (value: number) => {
      console.log('in timer with ', value);
      this.currentDelayedValue = value;
    },
    error: (err: any) => {
      console.log('in error with ', err);
      this.errorValue = err;
    },
    complete: () => {
      console.log('timer complete')
    }
  }
  startDelayed() {
    console.log('starting timer');
    this.Delayed.subscribe(this.delayedOptions)

  }
}
