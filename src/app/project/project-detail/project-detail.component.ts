import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Project } from '@app/models/Project';
import { switchMap } from 'rxjs/operators';
import { ProjectService } from '../project.service';

@Component({
  selector: 'ngprj-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})

export class ProjectDetailComponent implements OnInit {

  @Input() project!: Project;

  constructor( private projectService: ProjectService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // const id = this.activatedRoute.snapshot.paramMap.get('id');
    // this.projectService.get(+id!).subscribe(data => console.log(data));

    // this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
    //   console.log(params.get('id'));
    // })

   this.activatedRoute.paramMap.pipe(
     switchMap((params: ParamMap) => this.projectService.get(+params.get('id')!))
     ).subscribe(data => console.log(data));
  }

}
