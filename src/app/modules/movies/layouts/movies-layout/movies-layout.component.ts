import { Component } from '@angular/core';

@Component({
  selector: 'app-movies-layout',
  templateUrl: './movies-layout.component.html',
  styleUrls: ['./movies-layout.component.css']
})
export class MoviesLayoutComponent {
  
  public sidebarItems = [
    {label: 'Home', icon: 'home', url: './'},
    {label: 'Top 100', icon: 'list_alt', url: './list'},
    {label: 'Saved Movies', icon: 'bookmark_added', url: './saved'},
  ]

}
