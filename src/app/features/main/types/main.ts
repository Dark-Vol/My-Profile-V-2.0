import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [CommonModule],
  templateUrl: '../main.html',
  styleUrl: '../main.scss',
})
export class Main {
  myskills: MySkills[] = [
    {
      id: 1,
      name: 'Angular',
      image: 'img/icon/Angular.svg',
    },
    {
      id: 2,
      name: 'React',
      image: 'img/icon/React.svg',
    },
    {
      id: 3,
      name: 'TypeScript',
      image: 'img/icon/TypeScript.svg',
    },
    {
      id: 4,
      name: 'JavaScript',
      image: 'img/icon/JavaScript.svg',
    },
    {
      id: 5,
      name: 'HTML',
      image: 'img/icon/HTML5.svg',
    },
    {
      id: 6,
      name: 'CSS',
      image: 'img/icon/CSS3.svg',
    },
    {
      id: 7,
      name: 'Node.js',
      image: 'img/icon/Node.js.svg',
    },
    {
      id: 8,
      name: 'SQL Server',
      image: 'img/icon/SQL Developer.svg',
    },
    {
      id: 9,
      name: 'React Native',
      image: 'img/icon/mobile_11871150 (2).png',
    },
    {
      id: 10,
      name: 'Python',
      image: 'img/icon/Python.svg',
    },
    {
      id: 11,
      name: 'Git',
      image: 'img/icon/Git.svg',
    },
    {
      id: 12,
      name: 'ESlint',
      image: 'img/icon/ESLint.svg',
    },
    {
      id: 13,
      name: 'Express',
      image: 'img/icon/Express.svg',
    },
    {
      id: 14,
      name: 'Figma',
      image: 'img/icon/Figma.svg',
    },
    {
      id: 15,
      name: 'Firebase',
      image: 'img/icon/Firebase.svg',
    },
    {
      id: 16,
      name: 'GitHub',
      image: 'img/icon/GitHub.svg',
    },
    {
      id: 17,
      name: 'GitLab',
      image: 'img/icon/GitLab.svg',
    },
    {
      id: 18,
      name: 'GraphQL',
      image: 'img/icon/GraphQL.svg',
    },
    {
      id: 19,
      name: 'JSON',
      image: 'img/icon/JSON.svg',
    },
    {
      id: 20,
      name: 'Linux',
      image: 'img/icon/Linux.svg',
    },
    {
      id: 21,
      name: 'Linux Distribution',
      image: 'img/icon/Debian.svg',
    },
    {
      id: 22,
      name: 'Matplotlib',
      image: 'img/icon/Matplotlib.svg',
    },
    {
      id: 23,
      name: 'MySQL',
      image: 'img/icon/MySQL.svg',
    },
    {
      id: 24,
      name: 'Nest.js',
      image: 'img/icon/Nest.js.svg',
    },
    {
      id: 25,
      name: 'Next.js',
      image: 'img/icon/Next.js.svg',
    },
    {
      id: 26,
      name: 'Nodemon',
      image: 'img/icon/Nodemon.svg',
    },
    {
      id: 27,
      name: 'NPM',
      image: 'img/icon/NPM.svg',
    },
    {
      id: 28,
      name: 'NumPy',
      image: 'img/icon/NumPy.svg',
    },
    {
      id: 29,
      name: 'Oracle',
      image: 'img/icon/Oracle.svg',
    },
    {
      id: 30,
      name: 'Pandas',
      image: 'img/icon/Pandas.svg',
    },
    {
      id: 31,
      name: 'PostgresSQL',
      image: 'img/icon/PostgresSQL.svg',
    },
    {
      id: 32,
      name: 'Postman',
      image: 'img/icon/Postman.svg',
    },
    {
      id: 33,
      name: 'PyScript',
      image: 'img/icon/PyScript.svg',
    },
    {
      id: 34,
      name: 'pytest',
      image: 'img/icon/pytest.svg',
    },
    {
      id: 35,
      name: 'PyTorch',
      image: 'img/icon/PyTorch.svg',
    },
    {
      id: 36,
      name: 'React Bootstrap',
      image: 'img/icon/React Bootstrap.svg',
    },
    {
      id: 37,
      name: 'Redux',
      image: 'img/icon/Redux.svg',
    },
    {
      id: 38,
      name: 'Sass',
      image: 'img/icon/Sass.svg',
    },
    {
      id: 39,
      name: 'SQLite',
      image: 'img/icon/SQLite.svg',
    },
    {
      id: 40,
      name: 'Svelte',
      image: 'img/icon/Svelte.svg',
    },
    {
      id: 41,
      name: 'Tailwind CSS',
      image: 'img/icon/Tailwind CSS.svg',
    },
    {
      id: 42,
      name: 'Vite.js',
      image: 'img/icon/Vite.js.svg',
    },
    {
      id: 43,
      name: 'Vite',
      image: 'img/icon/Vite.svg',
    },
    {
      id: 44,
      name: 'Windows 11',
      image: 'img/icon/Windows 11.svg',
    },
    {
      id: 45,
      name: 'Visual Studio Code',
      image: 'img/icon/Visual Studio Code (VS Code).svg',
    },
    {
      id: 46,
      name: 'Webpack',
      image: 'img/icon/Webpack.svg',
    },
    {
      id: 47,
      name: 'Trelloo',
      image: 'img/icon/Trello.svg',
    },
    {
      id: 48,
      name: 'Docker',
      image: 'img/icon/Docker.svg',
    },
    {
      id: 49,
      name: "C++",
      image: "icon/C++ (CPlusPlus).svg",
    },
    {
      id: 50,
      name: "Power Shell",
      image: "icon/Powershell.svg",
    },
    {
      id: 51,
      name: 'Android Studio',
      image: 'icon/Android Studio.svg',
    },
    // {
    //   id: 52,
    //   name: "Java",
    //   image: "icon/Java.svg",
    // },
    // {
    //   id: 53,
    //   name: "Moodle",
    //   image: "icon/Moodle.svg",
    // }
  ];
}
