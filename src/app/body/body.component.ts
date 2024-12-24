import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { LeftMenuComponent } from '../left-menu/left-menu.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RouterModule, RouterOutlet, FooterComponent,BodyComponent,LeftMenuComponent,HeaderComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
