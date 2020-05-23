import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  currentNum: number = 20;
  update(i: number) { this.currentNum = i }
  goBack(): void {
    this.location.back();
  }

}