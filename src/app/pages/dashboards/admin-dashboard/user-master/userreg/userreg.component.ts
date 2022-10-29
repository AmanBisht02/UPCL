import { Component, OnInit } from '@angular/core';

interface opt {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css'],
})
export class UserregComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  opts: opt[] = [
    { value: 'role-0', viewValue: 'ROLE_TENDERADMIN' },
    { value: 'role-1', viewValue: 'ROLE_ACRADMIN' },
    { value: 'role-2', viewValue: 'ROLE_CIRCULARADMIN' },
    { value: 'role-3', viewValue: 'ROLE_TECHNICAL_USER' },
    { value: 'role-4', viewValue: 'ROLE_ROSTERING' },
    { value: 'role-5', viewValue: 'ROLE_ONLINE_PAYMENTS' },
    { value: 'role-6', viewValue: 'ROLE_HELPDESK' },
    { value: 'role-7', viewValue: 'ROLE_DAILY_SUPPLY_POSITION' },
    { value: 'role-8', viewValue: 'ROLE_CSCUSER' },
    { value: 'role-9', viewValue: 'ROLE_OPERATIONS_USER' },
  ];
}
