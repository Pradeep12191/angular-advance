import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { AppService } from '../services/app.service';

const data = require('./data.json');

declare var require;

@Component({
  selector: 'app-inline-mat-table',
  templateUrl: './inline-mat-table.component.html',
  styleUrls: ['./inline-mat-table.component.css']
})
export class InlineMatTableComponent implements OnInit, OnDestroy {
  public employeeDataSource: MatTableDataSource<any>;
  public columns;
  public displayedColumns;
  public form: FormGroup;
  public employees: any[];
  public departments: any[];
  public data: MatTable<any>;
  private _ctrlIndex = 0;
  constructor(
    private fb: FormBuilder,
    private appService: AppService
  ) { }

  public get employeeFormArray() {
    return this.form.get('employee') as FormArray;
  }

  ngOnInit() {
    this.appService.setStickyClass('sticky-footer');
    this.employees = data;
    this.departments = [
      'Accounting', 'Business Development', 'Human Resources', 'Marketing',
      'Support', 'Services', 'Sales', 'Engineering'
    ];
    // this.employeeDataSource = new MatTableDataSource<any>(data);
    this.columns = [
      { key: 'first_name', title: 'First Name' },
      { key: 'last_name', title: 'Last Name' },
      { key: 'email', title: 'Email' },
      { key: 'gender', title: 'Gender' },
      { key: 'department', title: 'Department' }
    ];
    // this.displayedColumns = ['first_name', 'last_name', 'email', 'gender', 'department'];
    this.displayedColumns = ['first_name', 'last_name', 'email', 'gender', 'department'];
    this.initForm();
  }

  ngOnDestroy() {
    this.appService.setStickyClass('');
  }

  initForm() {
    this.form = this.fb.group({
      employee: this.fb.array([])
    });
    this.employees.forEach((employee) => {
      this.employeeFormArray.push(this.fb.group({
        id: this._ctrlIndex++,
        first_name: employee.first_name,
        last_name: employee.last_name,
        email: employee.email,
        gender: employee.gender,
        department: employee.department,
        isEdit: false,
        isNewlyAdded: false
      }));
    });
    this.employeeDataSource = new MatTableDataSource<any>(this.employeeFormArray.controls);
  }

  editRow(ctrl: FormGroup) {
    this.displayAll();
    ctrl.get('isEdit').setValue(true);
  }

  displayAll() {
    this.employeeFormArray.controls.forEach((ctrl) => {
      ctrl.get('isEdit').setValue(false);
    });
  }

  addEmployee() {
    this.displayAll();
    this.employeeFormArray.push(this.fb.group({
      id: this._ctrlIndex++,
      first_name: '',
      last_name: '',
      email: '',
      gender: '',
      department: '',
      isEdit: true,
      isNewlyAdded: true
    }));
    this.employeeDataSource = new MatTableDataSource<any>(this.employeeFormArray.controls);
  }

  resetEmployees() {
    this.removeNewlyAddedControls();
    this.employeeFormArray.reset(data);
  }

  private removeNewlyAddedControls() {
    const newlyAddedControls = [];
    this.employeeFormArray.controls.forEach((ctrl, index) => {
      if (ctrl.get('isNewlyAdded').value) {
        newlyAddedControls.push(ctrl);
      }
    });
    for (const ctrl of newlyAddedControls) {
      const removeIndex = this.employeeFormArray.controls.findIndex((c) => c.get('id').value === ctrl.get('id').value);
      this.employeeFormArray.removeAt(removeIndex);
    }
    this.employeeDataSource = new MatTableDataSource<any>(this.employeeFormArray.controls);
  }

}
