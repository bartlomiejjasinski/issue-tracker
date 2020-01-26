import { Component, OnInit, Inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup} from '@angular/forms';

import { IssuesData } from '../issues.data';
import { IssueModel, issueStates } from '../issue.model';

@Component({
  selector: 'issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.scss']
})

export class IssueDetailsComponent implements OnInit {

  @Input() model: IssueModel;
  form: FormGroup;
  issueStates = issueStates;

  private _fields = [
    {
      name: '_id', title: 'Id', formState: 'New', validators: [], asyncValidators: []
    },
    {
      name: 'title', title: 'Title', formState: '', validators: [], asyncValidators: []
    },
    {
      name: 'description', title: 'Description', formState: '', validators: [], asyncValidators: []
    },
    {
      name: 'state', title: 'State', formState: '', validators: [], asyncValidators: []
    }
  ];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _fb: FormBuilder,
    private data: IssuesData,
  ) { }


  ngOnInit() {
    this._buildForm();
    this._loadData();
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.save();
    }
  }


  private _buildForm(): void {
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

  private _loadData(): void {
    this.form.patchValue(this.model);
  }

  save(): void {
      this.data.post(this.form.value)
          .subscribe(res => {
            if (res.success) {
              this.model = res.data;
            } else {
              console.error(res.errorMessage);
            }
          });
  }
}


