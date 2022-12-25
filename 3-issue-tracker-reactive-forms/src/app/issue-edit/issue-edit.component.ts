import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Issue } from '../issue';
import { IssuesService } from './../issues.service';

@Component({
  selector: 'app-issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css'],
})
export class IssueEditComponent implements OnInit {
  @Input() issue: Issue | null = null;
  @Output() formClose = new EventEmitter();
  issueForm: FormGroup | undefined;

  constructor(private builder: FormBuilder, private issueService: IssuesService) {}

  ngOnInit(): void {
    this.issueForm = this.builder.group({
      title: [this.issue?.title, Validators.required],
      description: [this.issue?.description],
      priority: [this.issue?.priority, Validators.required],
    });
  }

  editIssue(): void {
    if (this.issueForm && this.issueForm.invalid) {
      this.issueForm.markAllAsTouched();
      return;
    }

    // spread order is important
    const updatedIssue = { ...this.issue, ...this.issueForm?.value };
    this.issueService.editIssue(updatedIssue);
    this.formClose.emit();
  }
}
