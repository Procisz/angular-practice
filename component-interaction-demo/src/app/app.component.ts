import { Component } from '@angular/core';
import { Hero } from './model/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MI A FASZOM EZ???';
  heroes: Hero[] = [
    { name: 'Bomlasztó', address: 'New York', superpower: 'can explode' },
    { name: 'IceMan', address: 'New York', superpower: 'can frose' },
    { name: 'FireMan', address: 'New York', superpower: 'can make fire' },
  ]

  selectedHero: Hero = this.heroes[0];

  selectHero(hero: Hero): void {
    this.selectedHero = hero;

  }

  heroChanged(hero: Hero): void {
    console.log('Changed hero: ', hero);
  }

}
