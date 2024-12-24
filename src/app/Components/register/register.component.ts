import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../Services/auth.service';  
import { Router } from '@angular/router';  // Import Router
import { Register } from '../../Models/register';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  authService = inject(AuthService);  
  registerForm: FormGroup;

  emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';
  passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  zipPattern= /^\d{6}$/;

  constructor(private formBuilder: FormBuilder, private router: Router) {  // Inject Router
    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        middleName: [''],
        lastName: ['', Validators.required],
        maritalStatus: ['', Validators.required],
        dob: ['', Validators.required], 
        email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
        address: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', [Validators.required,Validators.pattern(this.zipPattern)]],
        username: ['', [Validators.required, Validators.minLength(5)]],
        password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      alert('Please fill in all required fields with valid data.');
      return;
    }

    const formData = this.registerForm.value;

    const registrationData: Register = {
      ...formData,
      dob: formData.dob, 
    };

    console.log('Sending Registration Data:', registrationData);

    this.authService.createEmployee(registrationData).then(
      () => {
        alert('Registration successful!');
        this.router.navigate(['/login']);
      },
      (error) => {
        alert('Registration failed. Please try again.');
        console.error(error);
      }
    );
  }
}
