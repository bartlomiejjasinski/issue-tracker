import { Component } from '@angular/core';
import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'issue-tracker-app';

  constructor(public snackBar: MatSnackBar) {}
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
