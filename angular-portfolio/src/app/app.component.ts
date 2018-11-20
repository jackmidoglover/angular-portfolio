import { Component } from '@angular/core';
declare var require: any;
var projects = require('../assets/projectdata/projects.json');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-portfolio';
  parallaxClasses = ["firstMoon", "crescentMoon", "newMoon"];
  projects = [...projects];
}
