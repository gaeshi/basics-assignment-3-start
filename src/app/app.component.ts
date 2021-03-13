import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  showDetails = false;
  logEntries = [];

  get buttonLabel() {
    return this.showDetails ? "Hide Details" : "Display Details";
  }

  onToggleDisplayDetails() {
    this.showDetails = !this.showDetails;
    this.logEntries.push(`${new Date()} ${this.buttonLabel} button clicked.`);
  }
}
