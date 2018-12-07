import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss']
  // encapsulation: ViewEncapsulation.None,
})
export class PortfolioCardComponent implements OnInit {
  @Input() project : {type: Object};
  @Output() modalOpen = new EventEmitter<{project: Object[], clicked: boolean}>();

  modalShow = false;
  constructor() { }

  ngOnInit() {
   
  }

  onModalClick(project){
    console.log(project);
    this.modalShow = !this.modalShow;
   
  }

}
