import { Component, OnInit } from '@angular/core';
import { data } from '../data'
import { Location } from '@angular/common';
@Component({
  selector: 'app-display-sentence',
  templateUrl: './display-sentence.component.html',
  styleUrls: ['./display-sentence.component.scss']
})
export class DisplaySentenceComponent implements OnInit {
  myData: any

  constructor(private location: Location) { }

  ngOnInit() {
  }
  onClickMe() {
    this.myData = data[Math.floor(Math.random() * data.length)];
  }
  goBack(): void {
    this.location.back();
  }
}
