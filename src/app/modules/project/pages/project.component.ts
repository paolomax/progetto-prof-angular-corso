import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngprj-project',
  template: `
   <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
