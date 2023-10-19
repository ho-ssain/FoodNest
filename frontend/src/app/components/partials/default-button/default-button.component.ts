import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.css'],
})
export class DefaultButtonComponent implements OnInit {
  @Input()
  type: 'submit' | 'button' = 'submit';
  @Input()
  text: string = 'Submit';
  @Input()
  bgColor = '#32065b';
  @Input()
  color = 'white';
  @Input()
  fontSizeRem = 1.2;
  @Input()
  widthRem = 10;
  @Output()
  onClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
