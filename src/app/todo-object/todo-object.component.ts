import { Hero } from './../hero';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-object',
  templateUrl: './todo-object.component.html',
  styleUrls: ['./todo-object.component.css']
})
export class TodoObjectComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: TodoService
  ) {}

  ngOnInit() {
  }
}
