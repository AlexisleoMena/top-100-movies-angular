import { Component } from '@angular/core';

@Component({
  selector: 'app-movies-layout',
  templateUrl: './movies-layout.component.html',
  styleUrls: ['./movies-layout.component.css']
})
export class MoviesLayoutComponent {
  
  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Añadir', icon: 'add', url: './new-todo' },
  ]

}
