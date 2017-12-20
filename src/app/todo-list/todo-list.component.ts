import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {TodoService} from '../todo.service';

@Component({selector: 'app-todo-list', templateUrl: './todo-list.component.html', styleUrls: ['./todo-list.component.css']})
export class TodoListComponent implements OnInit {
  heroes : Hero[];
  selectedHero : Hero;

  constructor(private todoService : TodoService) {}

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero : Hero) : void {
    this.selectedHero = hero;
    console.debug(this.selectedHero);
  }
  getHeroes() : void {
    this
      .todoService
      .getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name : string) : void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.todoService.addHero({name} as Hero)
      .subscribe(hero => {
        this
          .heroes
          .push(hero);
      });
  }

  delete(hero : Hero) : void {
    this.heroes = this
      .heroes
      .filter(h => h !== hero);
    this
      .todoService
      .deleteHero(hero)
      .subscribe();
  }
}
