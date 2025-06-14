import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  myProjects: Project[] = [
    {
      title: 'E-Commerce Store',
      description:
        'An online store built with Angular and Bootstrap, featuring shopping cart and checkout functionality.',
    },
    {
      title: 'Task Tracker',
      description:
        'A task management application with add, delete, and complete features using Angular.',
    },
    {
      title: 'Weather App',
      description:
        'A weather forecasting app that consumes a public API and displays weather by city.',
    },
    {
      title: 'Personal Portfolio',
      description:
        'A responsive personal portfolio website showcasing projects and skills using Angular.',
    },
    {
      title: 'Movie Finder',
      description:
        'An app that fetches data from the TMDb API and displays trending and popular movies.',
    },
    {
      title: 'Blog Platform',
      description:
        'A simple blog website where users can read and post articles, using Angular and a JSON server.',
    },
  ];
}
interface Project {
  title: string;
  description: string;
}
