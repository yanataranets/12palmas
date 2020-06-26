import { Component, HostListener, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css'],
  animations: [
    trigger('fade',
      [
        state('void', style({ opacity : 0})),
        transition(':enter', [animate(300)]),
        transition(':leave', [animate(500)]),
      ]
    )]
})
export class TopNavbarComponent {
  constructor(@Inject(DOCUMENT) document) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 0) {
      const element = document.getElementById('navbar');
      element.classList.add('sticky');
    } else {
      const element = document.getElementById('navbar');
      element.classList.remove('sticky');
    }
  }


}
