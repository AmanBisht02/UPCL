import { Component, OnInit } from '@angular/core';

interface report {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cscreport',
  templateUrl: './cscreport.component.html',
  styleUrls: ['./cscreport.component.css']
})
export class CscreportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  reports: report[] = [
    { value: 'report-0', viewValue: '  CSC ADMIN MIS REPORT  ' },
    {
      value: 'report-1',
      viewValue: '  CSC MASTER COLLECTION WALLTER REPORT  ',
    },
  ];
}
