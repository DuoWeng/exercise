import { Component, OnInit } from '@angular/core';
import { data } from '../data'
@Component({
  selector: 'app-display-sentence',
  templateUrl: './display-sentence.component.html',
  styleUrls: ['./display-sentence.component.scss']
})
export class DisplaySentenceComponent implements OnInit {
  myData: any

  constructor() { }

  ngOnInit() {
  }
  onClickMe() {
    this.myData = data[Math.floor(Math.random() * data.length)];
  }
}
