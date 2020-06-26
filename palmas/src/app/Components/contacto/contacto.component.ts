import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
nameControl: FormControl;
emailControl: FormControl;

ngOnInit() {
  this.nameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  this.nameControl.valueChanges.subscribe((value) => console.log(value));

  this.emailControl = new FormControl('', [Validators.required, Validators.minLength(5)])
}

  refresh() {
    window.location.reload();
    alert('Hemos recibido tu mensaje! Gracias para cooperación');
  }
}

