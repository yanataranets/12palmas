import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons-checkbox',
  templateUrl: './buttons-checkbox.component.html',
  styleUrls: ['./buttons-checkbox.component.css']
})
export class ButtonsCheckboxComponent {
  model = {
    left: true,
    middle: false,
    right: false
  };
}
