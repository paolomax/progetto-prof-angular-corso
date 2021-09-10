import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from '@app/models/Project';

@Component({
  selector: 'ngprj-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<Project>();
  @Output() sendString = new EventEmitter<String>();

  constructor() { 
    setTimeout(() => this.sendString.emit('Timer Scaduto') ,3000);
  }

  ngOnInit(): void {
  }

  submit(f: NgForm) {
    this.submitted.emit({...f.value});
  }

}
