import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssuesService } from './../issues.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [];
  showReportIssue = false;
  selectedIssue: Issue | null = null;
  editIssue: Issue | null = null;

  constructor(private issueService: IssuesService) {}

  ngOnInit(): void {
    this.getIssues();
  }

  getIssues() {
    this.issues = this.issueService.getPendingIssues();
  }

  saveIssue(issue: Issue) {
    this.selectedIssue = issue;
    this.editIssue = null;
  }

  onCloseReport() {
    this.showReportIssue = false;
    this.getIssues();
  }

  saveEditIssue(issue: Issue) {
    this.editIssue = issue;
    this.showReportIssue = false;
    this.selectedIssue = null;
  }

  onCloseEdit() {
    this.editIssue = null;
    this.getIssues();
  }

  onConfirm(confirmed: boolean) {
    if (confirmed && this.selectedIssue) {
      this.issueService.completeIssue(this.selectedIssue);
      this.getIssues();
    }
    this.selectedIssue = null;
  }
}
