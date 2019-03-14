import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit 
{

  hs: string = "St Xavier Class of 2009";
  onu: string = "Ohio Nothern University 2010";
  uc: string = "University of Cincinnati 2012-15";

  constructor() { }

  ngOnInit() {
  }

}
