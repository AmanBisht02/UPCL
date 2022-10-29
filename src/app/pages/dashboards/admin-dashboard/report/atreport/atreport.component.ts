import { Component, OnInit } from '@angular/core';

interface report {
  value: string;
  viewValue: string;
}

interface division {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-atreport',
  templateUrl: './atreport.component.html',
  styleUrls: ['./atreport.component.css'],
})
export class AtreportComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  reports: report[] = [
    { value: 'report-0', viewValue: ' BBPS HDFC ABSTRACT REPORT ' },
    { value: 'report-1', viewValue: ' POS TRANSACTION ABSTRACT REPORT ' },
  ];

  divisions: division[] = [
    { value: 'division-0', viewValue: '  DEHRADUN_SOUTH  ' },
    { value: 'division-1', viewValue: '  DEHRADUN_EAST  ' },
    { value: 'division-1', viewValue: '  DEHRADUN_WEST  ' },
    { value: 'division-1', viewValue: '  DEHRADUN_NORTH  ' },
  ];
}
