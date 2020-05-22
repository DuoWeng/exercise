import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {
  @Input() num: number;
  @Output() changeRequest = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  changeTheValue(i: number) { this.changeRequest.emit(i); }
}
