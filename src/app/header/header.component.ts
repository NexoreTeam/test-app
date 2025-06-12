import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, NgFor, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  navItems = [
    { label: 'Home', path: '/', exact: true },
    { label: 'About', path: '/about' },
  ];
  baseClass =
    'items-center justify-between px-4 py-2 rounded-md transition-all hover:bg-blue-800 text-white';
  activeClass = 'bg-blue-800 ring-2 ring-blue-300 text-white font-semibold';
}
