import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  standalone:true,
  imports:[RouterLink,FormsModule,CommonModule],
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent {
  isCollapsed = false; 

  
  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}
