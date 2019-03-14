import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit 
{
  hotels: string = "front desk manager quality suites";
  sspm: string = "regional supervisor for KY";
  mtt: string = ".NET bootcamp student";

  constructor() { }

  ngOnInit() {
  }

}
