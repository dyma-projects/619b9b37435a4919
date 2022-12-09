import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css'],
})
export class Exercice3Component implements OnInit {
  public status: Boolean = true;
  constructor() {}

  ngOnInit(): void {}

  togglePGraph() {
    this.status = !this.status;
    console.log('Status : ' + this.status);
  }
}
