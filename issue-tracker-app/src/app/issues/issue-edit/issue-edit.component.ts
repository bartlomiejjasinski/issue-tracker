import { Component, OnInit, Inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { IssuesData } from '../issues.data';
import { IssueModel, issueStates } from '../issue.model';

@Component({
  selector: 'issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.scss']
})

export class IssueEditComponent implements OnInit {

  @Input() model: IssueModel;
  form: FormGroup;
  issueStates = issueStates;

  private _fields = [
    {
      name: '_id', title: 'Id', formState: 'New', validators: [], asyncValidators: []
    },
    {
      name: 'title', title: 'Title', formState: '', validators: [Validators.required], asyncValidators: []
    },
    {
      name: 'description', title: 'Description', formState: '', validators: [], asyncValidators: []
    },
    {
      name: 'state', title: 'State', formState: '', validators: [Validators.required], asyncValidators: []
    }
  ];

  stateIndex: number;
  isEdit: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _fb: FormBuilder,
    private _data: IssuesData,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.buildForm();
    this.loadData();
  }

  loadData() {
    const id = this._route.snapshot.paramMap.get('id');

    if (id) {
      this.isEdit = true;

      this._data.getOne(id).subscribe(res => {
        if (res.success) {
          this.model = res.data;
          this.stateIndex = this.getCurrentStateIndex();
          this.form.patchValue(this.model);
        } else {
          this._snackBar.open(res.errorMessage, 'Error',{
            duration: 5 * 1000,
          });
        }
      });
    }
  }

  private buildForm(): void {
    const fg = this._fb.group({});
    for (const field of this._fields) {
      fg.addControl(field.name,
        field.formState === '[]'
          ? this._fb.array([])
          : this._fb.control(
            field.formState,
            field.validators,
            field.asyncValidators
          ));
    }
    this.form = fg;
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.save();
    }
  }

  save(): void {
      this._data.post(this.form.value)
          .subscribe(res => {
            if (res.success) {
              this.model = res.data;
              this._router.navigate(['/']);
            } else {
              this._snackBar.open(res.errorMessage, 'Error',{
                duration: 5 * 1000,
              });
            }
          });
  }

  getCurrentStateIndex(): number {
    return issueStates.findIndex(state => state === this.model.state);
  }
}