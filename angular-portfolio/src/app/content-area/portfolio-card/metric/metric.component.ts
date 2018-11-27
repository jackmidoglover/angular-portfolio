import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.scss']
})
export class MetricComponent implements OnInit {
@Input() projectDetail : Object;
@Output() modalWindow = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  modalClose(){
    this.modalWindow.emit();
  }

}
