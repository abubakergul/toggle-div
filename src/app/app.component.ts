import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'toggle-div';
  display = true;

  toggle($event) {
    $event.stopPropagation();
    this.display = !this.display;
  }
  @HostListener('document:click', ['$event']) onDocumentClick(event) {
    this.display = false;
  }
}
