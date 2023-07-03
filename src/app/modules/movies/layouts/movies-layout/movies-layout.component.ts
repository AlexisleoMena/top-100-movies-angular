import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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
  
  isScreenSizeMDOrSmaller: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Small])
      .subscribe(result => {
        this.isScreenSizeMDOrSmaller = result.matches;
      });
  }

}
