import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { interval } from 'rxjs';
import { Location } from '@angular/common';
@Component({
  selector: 'app-display-refresh',
  templateUrl: './display-refresh.component.html',
  styleUrls: ['./display-refresh.component.scss']
})
export class DisplayRefreshComponent implements OnInit, AfterViewInit, OnDestroy {
  topMessage: any
  mostPopular: any
  constructor(private myService: FetchDataService, private location: Location) { }
  source = interval(2000);
  intervalId;
  ngOnInit() {
    this.refleshTopMessage();
    this.myService.fetchTopMessage().subscribe(myData => this.topMessage = myData);

  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.


    // one way
    //   this.intervalId=setInterval(() => { 
    //     this.refleshTopMessage();
    // }, 3000);

    //second way
    this.source.subscribe(() => this.refleshTopMessage());
  }
  refleshTopMessage(): void {
    this.myService.fetchTopMessage().subscribe(myData => this.topMessage = myData);
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.intervalId);
  }
  getMostPopular(): void {
    this.myService.fetchMostPopular().subscribe(myData => this.mostPopular = myData.data.children.slice(0, 20));
  }
  goBack(): void {
    this.location.back();
  }



}