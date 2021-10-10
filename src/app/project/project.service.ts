import { Injectable } from '@angular/core';
import { Project } from '@app/models/Project';
import { LogService } from '@app/shared/log.service';
import { isWhileStatement } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Project[] = [
    {
      id: 1,
      code: 'NHusYJl',
      name: 'Progetto Alpha',
      description: 'Lorem ipsum dolor sit amet.',
      start: new Date(2021, 1, 30),
      end: new Date(2021, 3, 15),
      priority: 'medium',
      done: true,
      tasks: []
    },
    {
      id: 2,
      code: 'SJieYKL',
      name: 'Progetto Beta',
      description: 'Lorem ipsum dolor sit amet.',
      start: new Date(2019, 3, 30),
      end: new Date(2019, 6, 15),
      priority: 'low',
      done: true,
      tasks: []
    },
    {
      id: 3,
      code: 'POjeGBs',
      name: 'Progetto Gamma',
      description: 'Lorem ipsum dolor sit amet.',
      start: new Date(2019, 8, 15),
      priority: 'low',
      done: false,
      tasks: []
    }
  ];

  constructor(private logService: LogService) {
  }

  getAll(): Project[] {
    this.logService.log('getAll Eseguito');
    return [...this.projects];
  }

  add(project: Project): void {
    this.logService.log('add Eseguito');

    this.projects.push({
      ...project,
      id: this.projects.length,
      code: Math.random().toString(36).replace('0.', '').substring(2, 9),
      done: false,
      tasks: [],
    });
  }

  get(id: number): Project {
    this.logService.log('get Eseguito');
    return this.projects.find(project => project.id === id) as Project;
  }
}


