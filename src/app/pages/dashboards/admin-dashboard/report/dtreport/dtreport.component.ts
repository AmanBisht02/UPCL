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
  selector: 'app-dtreport',
  templateUrl: './dtreport.component.html',
  styleUrls: ['./dtreport.component.css'],
})
export class DtreportComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  reports: report[] = [
    {
      value: 'report-0',
      viewValue: '  BBPS HDFC SUCCESS TRANSACTION DETAIL REPORT  ',
    },
    { value: 'report-1', viewValue: '  POS TRANSACTION DETAIL REPORT  ' },
  ];

  divisions: division[] = [
    { value: 'division-0', viewValue: '  DEHRADUN_SOUTH  ' },
    { value: 'division-1', viewValue: '  DEHRADUN_EAST  ' },
    { value: 'division-1', viewValue: '  DEHRADUN_WEST  ' },
    { value: 'division-1', viewValue: '  DEHRADUN_NORTH  ' },
  ];
}
