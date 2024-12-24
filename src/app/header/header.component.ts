import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProfileComponent } from '../Components/profile/profile.component';

@Component({
  selector: 'app-header',
  standalone:true,
  imports:[RouterLink,CommonModule,ProfileComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  dropdownOpen = false;

  constructor(private router: Router) {}

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

 

  viewProfile() {
    this.router.navigate(['/profile']);
  }

  logout() {
    console.log('Logout clicked');
    
    this.router.navigate(['/login']);
  }
}
