import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IssueReportComponent } from './issue-report/issue-report.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { IssueEditComponent } from './issue-edit/issue-edit.component';

@NgModule({
  declarations: [AppComponent, IssueListComponent, IssueReportComponent, ConfirmDialogComponent, IssueEditComponent],
  imports: [BrowserModule, ClarityModule, BrowserAnimationsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
