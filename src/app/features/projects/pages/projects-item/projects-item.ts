import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { projects, Project } from '../types/projects-list';

@Component({
  selector: 'app-projects-item',
  imports: [CommonModule],
  templateUrl: './projects-item.html',
  styleUrl: './projects-item.scss',
})
export class ProjectsItem implements OnInit {
  projectId: number = 0;
  project: Project | undefined;

  constructor(
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectId = +params['id'];
      this.project = projects.find(p => p.id === this.projectId);
    });
  }

  navigateBack(): void {
    const previousUrl = this.router.url.split('/').slice(0, -1).join('/');
    if (previousUrl.includes('technology')) {
      this.router.navigate([previousUrl]);
    } else {
      this.router.navigate(['/projects']);
    }
  }
}
