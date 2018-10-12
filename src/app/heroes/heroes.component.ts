import { HeroService } from './../shared/hero.service';
// import { HEROES } from './../shared/mock-heroes'; // removed for service calling data is injected by DI
import { Hero } from './../shared/hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // single data bind
  // hero: Hero = {
  //   id: 1,
  //   name: 'stromwind',
  //   detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In minus quae numquam deleniti tenetur dolores! Ducimus possimus, officia minima sapiente dolores unde delectus doloribus in sed id accusantium quis aliquid?'
  // }

  // data bind from model(mock-heroes)
  // heroes = HEROES; // removed for service calling data is injected by DI
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(heroFromList: Hero): void  {
    this.selectedHero = heroFromList;
  }
  constructor(private heroService: HeroService) {
   }

  getHeroFromService(): void {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit() {
    this.getHeroFromService();
  }

}
