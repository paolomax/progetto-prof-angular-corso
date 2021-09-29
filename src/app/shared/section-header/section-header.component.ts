import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngprj-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {
  @Input() title = '';

  constructor() { }

  ngOnInit(): void {
  }

}
