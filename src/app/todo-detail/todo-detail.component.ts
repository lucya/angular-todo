import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from "../hero";
import { TodoService } from "../todo.service";

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  @Input() hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: TodoService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHero();
  }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.debug('di : ', id);
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

}
