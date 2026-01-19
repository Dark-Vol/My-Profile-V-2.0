import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  location: string = 'Ukraine, Odessa';
  phone1: string = '+38 (050) 579-9437';
  phone2: string = '+38 (098) 845-39-23';
  age: number = 25;
  email: string = 'vavilovnikita@ukr.net';
}
