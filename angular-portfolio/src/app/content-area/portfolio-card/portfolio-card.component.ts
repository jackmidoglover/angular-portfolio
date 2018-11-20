import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss']
  // encapsulation: ViewEncapsulation.None,
})
export class PortfolioCardComponent implements OnInit {
  @Input() project : {type: Object};
  constructor() { }

  ngOnInit() {
   
  }

}
