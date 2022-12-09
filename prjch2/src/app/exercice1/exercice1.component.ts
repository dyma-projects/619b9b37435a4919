import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component implements OnInit {
  public title: string = 'de la part de Marc';
  public isUnchanged: Boolean = true;

  constructor() {}

  ngOnInit(): void {}

  toggleButton() {
    this.isUnchanged = !this.isUnchanged;
  }
}
