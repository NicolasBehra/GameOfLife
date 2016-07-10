import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  moduleId: module.id,
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.css']
})

export class NavBarComponent { 
	title: string = 'Game Of Life';
}
