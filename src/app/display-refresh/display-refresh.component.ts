import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { interval } from 'rxjs';
import { Location } from '@angular/common';
@Component({
  selector: 'app-display-refresh',
  templateUrl: './display-refresh.component.html',
  styleUrls: ['./display-refresh.component.scss']
})
export class DisplayRefreshComponent implements OnInit {
  topMessage: any
  mostPopular: any
  constructor(private myService: FetchDataService, private location: Location) { }
  source = interval(2000);



  ngOnInit() {
    this.refleshTopMessage();
    this.myService.fetchTopMessage().subscribe(myData => this.topMessage = myData);
    // one way
    //   setInterval(() => { 
    //     this.refleshTopMessage();
    // }, 3000);

    //second way
    this.source.subscribe(() => this.refleshTopMessage());
  }
  refleshTopMessage(): void {
    this.myService.fetchTopMessage().subscribe(myData => this.topMessage = myData);
  }
  getMostPopular(): void {
    this.myService.fetchMostPopular().subscribe(myData => this.mostPopular = myData.data.children.slice(0, 20));
  }
  goBack(): void {
    this.location.back();
  }



}