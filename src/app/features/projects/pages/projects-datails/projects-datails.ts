import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { projects, Project } from '../types/projects-list';

@Component({
  selector: 'app-projects-datails',
  imports: [CommonModule],
  templateUrl: './projects-datails.html',
  styleUrl: './projects-datails.scss',
})
export class ProjectsDatails implements OnInit {
  technologySlug: string = '';
  technologyName: string = '';
  filteredProjects: Project[] = [];

  constructor(
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.technologySlug = params['slug'];
      this.filterProjectsByTechnology();
    });
  }

  filterProjectsByTechnology(): void {
    const pythonTechs = new Set([
      'python', 'pandas', 'numpy', 'matplotlib', 'seaborn', 
      'pygame', 'telethon', 'sqlite3', 'python telegram bot',
      'pytest', 'typer ', 'flet', 'gui tkinter', 'telegram.ext',
      'telegram', 'os', 'json', 'datatime', 'math'
    ]);

    const reactTechs = new Set(['react', 'react router', 'react hook form', 'react hook']);
    const reactNativeTechs = new Set(['react native', 'expo', 'expo router', 'expo status bar']);
    const nextTechs = new Set(['nextjs']);
    const htmlCssJsTechs = new Set(['html', 'css', 'javascript', 'htm', 'js icon']);
    const angularTechs = new Set(['angular']);

    // Обработка различных групп технологий
    switch (this.technologySlug) {
      case 'html-css-javascript':
        this.technologyName = 'HTML/CSS/JS';
        this.filteredProjects = projects.filter(project => {
          const projectTechs = project.techStacks.map(t => t.name.toLowerCase().trim());
          return projectTechs.some(t => htmlCssJsTechs.has(t));
        });
        break;

      case 'react':
        this.technologyName = 'React';
        this.filteredProjects = projects.filter(project => {
          const projectTechs = project.techStacks.map(t => t.name.toLowerCase().trim());
          const hasReactNative = projectTechs.some(t => reactNativeTechs.has(t));
          const hasNext = projectTechs.some(t => nextTechs.has(t));
          const hasReact = projectTechs.some(t => reactTechs.has(t));
          return hasReact && !hasReactNative && !hasNext;
        });
        break;

      case 'react-native':
        this.technologyName = 'React-Native';
        this.filteredProjects = projects.filter(project => {
          const projectTechs = project.techStacks.map(t => t.name.toLowerCase().trim());
          return projectTechs.some(t => reactNativeTechs.has(t));
        });
        break;

      case 'next':
        this.technologyName = 'Next';
        this.filteredProjects = projects.filter(project => {
          const projectTechs = project.techStacks.map(t => t.name.toLowerCase().trim());
          return projectTechs.some(t => nextTechs.has(t));
        });
        break;

      case 'python':
        this.technologyName = 'Python';
        this.filteredProjects = projects.filter(project => {
          const projectTechs = project.techStacks.map(t => t.name.toLowerCase().trim());
          return projectTechs.some(t => pythonTechs.has(t));
        });
        break;

      case 'angular':
        this.technologyName = 'Angular';
        this.filteredProjects = projects.filter(project => {
          const projectTechs = project.techStacks.map(t => t.name.toLowerCase().trim());
          return projectTechs.some(t => angularTechs.has(t));
        });
        break;

      default:
        // Для остальных технологий используем старую логику
        const allTechStacks = projects.flatMap(p => p.techStacks);
        const tech = allTechStacks.find(
          t => t.name.toLowerCase().replace(/\s+/g, '-') === this.technologySlug
        );

        if (tech) {
          this.technologyName = tech.name;
          this.filteredProjects = projects.filter(project =>
            project.techStacks.some(t => t.name === tech.name)
          );
        } else {
          this.filteredProjects = [];
        }
        break;
    }
  }

  navigateToProject(projectId: number): void {
    this.router.navigate(['/projects', projectId]);
  }
}
