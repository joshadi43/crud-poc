import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  
  onSubmit(form: any) {
    if (form.valid) {
      const credentials = { username: form.value.username, password: form.value.password };
  
      
      this.authService.login(credentials).then(
        (response) => {
          alert('Login successful:');
        
          form.reset();  
          
          
          this.router.navigate(['/homepage']);
        },
        (error) => {
          console.error('Login failed:', error);
          alert(`Login failed: ${error.message || error}`);
        }
      );
    } else {
      alert('Please fill out the form correctly.');
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
  
}