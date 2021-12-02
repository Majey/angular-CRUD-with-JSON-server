import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  formValue !: FormGroup;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName: [""],
      lastName: [""],
      email: [""],
      mobile: [""],
      salary: [""]
    })
  }

}
