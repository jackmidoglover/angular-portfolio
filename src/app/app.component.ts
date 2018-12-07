import { Component, Directive } from '@angular/core';
declare var require: any;
var projects = require('../assets/projectdata/projects.json');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  parallaxClasses = ["firstMoon", "crescentMoon", "newMoon"];
  projects = [...projects];
  sectionTitle = ["About Me", "Portfolio"];
  sectionLinks = [
    {
      up: "Home", 
      down: "Portfolio",
      upRef: "#home",
      downRef: "#portfolio"
    },
    {
      up:"About Me",
      down: "Contact Me",
      upRef: "#aboutMe",
      downRef: "#contactMe"
    }
  ];
}
