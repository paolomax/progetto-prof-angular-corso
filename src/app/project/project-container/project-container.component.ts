import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from '@app/models/Project';
import { LogService } from '@app/shared/log.service';
import { ProjectService } from '../project.service';

@Component({
  selector: 'ngprj-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.css']
})

export class ProjectContainerComponent implements OnInit {

  selectedProject !: Project;

  projects: Project[] = [];

  constructor(private projectService: ProjectService) { 
  }

  ngOnInit(): void {
    this.projectService.getAll().subscribe((data) => this.projects = data);
  }

  selectProject(project: Project) {
    this.selectedProject = this.projectService.get(project.id);
  }

  submitProjectForm(project: Project) {
    this.projectService.add(project);
  }

  takeString(str: String) {
    console.log('Ho ricevuto dal figlio', str);
  }
}
