import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      counter works!
    </p>
  `,
  styles: [
  ]
})
export class CounterComponent implements OnInit {
  public counter:number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;

  }

}
