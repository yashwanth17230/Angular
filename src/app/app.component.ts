import { Component } from '@angular/core';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css']
})
export class NameInputComponent {
  firstName: string = 'John'; // Default value
  lastName: string = 'Doe';   // Default value
  fullName: string = '';

  updateFullName() {
    this.fullName = `${this.firstName} ${this.lastName}`;
  }
}
