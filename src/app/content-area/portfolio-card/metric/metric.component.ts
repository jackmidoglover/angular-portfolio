import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Projectmetric } from './Projectmetrics';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.scss']
})
export class MetricComponent implements OnInit {
@Input() public projectDetail : Projectmetric;
@Output() modalWindow = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  modalClose(){
    this.modalWindow.emit();
  }

}
