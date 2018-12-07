import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { LinkObject } from './LinkObject';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContentAreaComponent implements OnInit {
@Input() sectionTitle : String;
@Input() public linkTitle : LinkObject;
  constructor() { }

  ngOnInit() {
  }

}
