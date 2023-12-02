import { Component, OnInit,AfterViewInit, ViewChild, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements  OnInit,AfterViewInit {
  
  // @ViewChild("name")marker!:ElementRef;
  @ViewChildren("name")marker!:QueryList<any>;
  @ViewChild("childView")child!:CounterComponent;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    console.log(this.marker);
    // this.marker.nativeElement.style.color = "red";
    this.marker.first.nativeElement.style.color = "red";
    this.marker.last.nativeElement.style.color = "green";
  }
  inc(){
    this.child.increment();
  }
  dec(){
    this.child.decrement();

  }

  

}
