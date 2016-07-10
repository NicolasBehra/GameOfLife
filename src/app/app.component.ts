import { Component } from '@angular/core';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  directives  : [NavBarComponent],
})

export class AppComponent { }
