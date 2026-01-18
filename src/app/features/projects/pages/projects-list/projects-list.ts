import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { projects } from '../types/projects-list';
import { TechStack } from '../types/projects-list';

interface TechnologyGroup {
  name: string;
  type: string;
  icon: string;
  projectCount: number;
  slug: string;
}

@Component({
  selector: 'app-projects-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './projects-list.html',
  styleUrl: './projects-list.scss',
})
export class ProjectsList {
  technologies: TechnologyGroup[] = [];

  constructor() {
    this.groupTechnologies();
  }

  groupTechnologies(): void {
    const techMap = new Map<string, TechnologyGroup>();

    // Определяем группы технологий
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

    // Проходим по всем проектам
    projects.forEach(project => {
      const projectTechs = project.techStacks.map(t => t.name.toLowerCase().trim());
      
      // Проверяем наличие технологий в проекте (в порядке приоритета)
      const hasNext = projectTechs.some(t => nextTechs.has(t));
      const hasReactNative = projectTechs.some(t => reactNativeTechs.has(t));
      const hasReact = projectTechs.some(t => reactTechs.has(t)) && !hasReactNative && !hasNext;
      const hasPython = projectTechs.some(t => pythonTechs.has(t));
      const hasHtmlCssJs = projectTechs.some(t => htmlCssJsTechs.has(t)) && !hasReact && !hasNext && !hasReactNative;
      const hasAngular = projectTechs.some(t => angularTechs.has(t));

      // Добавляем проект в соответствующие группы
      if (hasNext) {
        this.addToGroup(techMap, 'next', 'Next', 'Framework', 'icon/Next.js.svg', 'next');
      }

      if (hasReactNative) {
        this.addToGroup(techMap, 'react-native', 'React-Native', 'Mobile Development', 'icon/icons8-react-native-100.svg', 'react-native');
      }

      if (hasReact) {
        this.addToGroup(techMap, 'react', 'React', 'Frontend Library', 'icon/React.svg', 'react');
      }

      if (hasPython) {
        this.addToGroup(techMap, 'python', 'Python', 'Programming Language', 'icon/Python.svg', 'python');
      }

      if (hasHtmlCssJs) {
        this.addToGroup(techMap, 'html-css-javascript', 'HTML/CSS/JS', 'Frontend Basics', 'icon/HTML5.svg', 'html-css-javascript');
      }

      if (hasAngular) {
        this.addToGroup(techMap, 'angular', 'Angular', 'Framework', 'icon/Angular.svg', 'angular');
      }
    });

    // Преобразуем Map в массив
    this.technologies = Array.from(techMap.values());
    
    // Сортируем по количеству проектов (от большего к меньшему)
    this.technologies.sort((a, b) => b.projectCount - a.projectCount);
  }

  private addToGroup(
    techMap: Map<string, TechnologyGroup>,
    key: string,
    name: string,
    type: string,
    icon: string,
    slug: string
  ): void {
    if (!techMap.has(key)) {
      techMap.set(key, {
        name,
        type,
        icon,
        projectCount: 0,
        slug
      });
    }
    techMap.get(key)!.projectCount++;
  }
}
