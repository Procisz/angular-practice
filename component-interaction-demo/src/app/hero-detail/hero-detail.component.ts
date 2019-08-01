import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero;
  @Output() valtozott: EventEmitter<Hero> = new EventEmitter(); // Eventemitter egy eseménykezelő, amely itt átadja a Hero-t.
  constructor() { }

  ngOnInit() {
  }

  changeTrigger(): void {
    this.valtozott.emit(this.hero); //Ez figyeli a változás
  }

}
